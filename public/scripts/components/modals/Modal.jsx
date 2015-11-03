import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from 'scripts/components/Icon.jsx';
import {Emitter} from 'scripts/utils/events.js';

export default class extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
  }
  componentWillMount() {
    document.body.classList.add('noscroll');
  }
  componentWillUnmount() {
    document.body.classList.remove('noscroll');
  }
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="modal--animation"
                               transitionAppear={true}
                               transitionAppearTimeout={500}
                               transitionEnterTimeout={0}
                               transitionLeaveTimeout={0}>
        <div className="modal__visible">
          <div className="modal__header">
            <div className="modal__header__title">{this.props.title}</div>
            <button className="modal__header__close" onClick={() => Emitter.emit(this)}><Icon name="times" /></button>
          </div>
          <div className="modal__content">
          { this.props.children }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
