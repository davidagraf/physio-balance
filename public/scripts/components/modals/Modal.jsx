import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from 'scripts/components/atomic/Icon.jsx';

import ModalStore from 'scripts/stores/ModalStore.js';
import { MODAL_CLOSE } from 'scripts/constants/ActionTypes.js';

export default class extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
  }
  state = {
    headerFixed: false
  }
  _checkHeaderPos() {
    let overflow = (this.refs.visible.getBoundingClientRect().top < 0);

    if (overflow != this.state.headerFixed) {
      this.setState({headerFixed: overflow});
    }
  }
  _close() {
    ModalStore.dispatch({type: MODAL_CLOSE});
  }
  _checkClickOutside(ev) {
    if (!this.refs.visible.contains(ev.target)) {
      this._close();
    }
  }
  componentDidMount() {
    this._checkHeaderPosThis = this._checkHeaderPos.bind(this);
    window.addEventListener('resize', this._checkHeaderPosThis);
    this.refs.scroll.addEventListener('scroll', this._checkHeaderPosThis);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this._checkHeaderPosThis);
    this.refs.scroll.removeEventListener('scroll', this._checkHeaderPosThis);
  }
  render() {
    const closeButton = (
      <button key="1" className="modal__header__close" onClick={() => this._close()}>
        <Icon name="times" />
      </button>
    );

    const headerContent = (
      <div className="modal__header__content">
        <div key="0" className="modal__header__title"><h1>{this.props.title}</h1></div>
        {closeButton}
      </div>
    );

    return (
      <div className="modal" onClick={(ev) => this._checkClickOutside(ev)}>
        <div className="modal__scroll" ref="scroll">
          <ReactCSSTransitionGroup transitionName="modal--animation"
                                   transitionAppear={true}
                                   transitionAppearTimeout={500}
                                   transitionEnterTimeout={0}
                                   transitionLeaveTimeout={0}>
            <div className="modal__visible" ref="visible">
              <div className="modal__header">{headerContent}</div>
              <div className="modal__content">
              { this.props.children }
              </div>
              {(this.state.headerFixed ?
                <div className="modal__header--fixed">
                  {headerContent}
                  <div className="modal__header__shadow"/>
                </div> :
                null)}
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
