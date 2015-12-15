import React from 'react';
import Icon from 'scripts/components/atomic/Icon.jsx';

import ModalStore from 'scripts/stores/ModalStore.js';
import { MODAL_CLOSE } from 'scripts/constants/ActionTypes.js';

export default class extends React.Component {
  static propTypes = {
    uris: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    startIndex : React.PropTypes.number.isRequired
  }
  state = {
    index: this.props.startIndex
  }
  _close() {
    ModalStore.dispatch({type: MODAL_CLOSE});
  }
  _keyUp(ev) {
    let newIndex;
    if (ev.keyCode === 37) {
      newIndex = this.state.index - 1;
    } else if (ev.keyCode === 39) {
      newIndex = this.state.index + 1;
    } else {
      return;
    }

    if (newIndex < 0) {
      newIndex = this.props.uris.length - 1;
    } else if (newIndex >= this.props.uris.length) {
      newIndex = 0;
    }

    this.setState({
      index: newIndex
    });
  }
  componentDidMount() {
    this._keyUpThis = this._keyUp.bind(this);
    window.addEventListener('keydown', this._keyUpThis);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._keyUpThis);
  }
  render() {
    return (
      <div className="gallerymodal">
        <button key="1" className="gallerymodal__close" onClick={() => this._close()}>
          <Icon name="times" />
        </button>
        <img className="gallerymodal__img" src={this.props.uris[this.state.index]} />
      </div>
    );
  }
}
