import React from 'react';

import {Emitter, Constants} from 'scripts/utils/events.js';

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
      <div className="modal__content">
        <button onClick={() => Emitter.emit(Constants.MODAL_CLOSE)}>close</button>
        { this.props.children }
      </div>
    );
  }
}
