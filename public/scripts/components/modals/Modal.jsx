import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from 'scripts/components/atomic/Icon.jsx';

import { Link } from 'react-router';

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      headerFixed: false
    };
  }
  _checkHeaderPos() {
    let overflow = (this.refs.visible.getBoundingClientRect().top < 0);

    if (overflow !== this.state.headerFixed) {
      this.setState({headerFixed: overflow});
    }
  }
  _close() {
    window.history.back();
  }
  _checkClickOutside(ev) {
    if (!this.refs.visible.contains(ev.target)) {
      this._close();
    }
  }
  render() {
    const closeButton = <Link tabIndex="-1" className="button--close" to="/"><Icon name="times" /></Link>;

    const headerContent = (
      <div className="modal__header__content">
        <div key="0" className="modal__header__title"><h1>{this.props.title}</h1></div>
        {closeButton}
      </div>
    );

    return (
      <div className="modal" onClick={(ev) => this._checkClickOutside(ev)}>
        <div className="modal__scroll" ref="scroll" onScroll={() => this._checkHeaderPos()}>
          <ReactCSSTransitionGroup transitionName="modal--animation"
                                   transitionAppear={true}
                                   transitionAppearTimeout={500}
                                   transitionEnterTimeout={0}
                                   transitionLeaveTimeout={0}>
            <div className="modal__visible" ref="visible">
              <div className="modal__header">{headerContent}</div>
              <div className={'modal__content ' + this.props.className}>
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

Modal.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string
};
