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
  _next() {
    let newIndex = this.state.index + 1;
    if (newIndex >= this.props.uris.length) {
      newIndex = 0;
    }
    this.setState({
      index: newIndex
    });
  }
  _prev() {
    let newIndex = this.state.index - 1;
    if (newIndex < 0) {
      newIndex = this.props.uris.length - 1;
    }
    this.setState({
      index: newIndex
    });
  }
  _keyUp(ev) {
    if (ev.keyCode === 37) {
      this._prev();
    } else if (ev.keyCode === 39) {
      this._next();
    }
  }
  _touchStart(ev) {
    this._touchStartX = ev.nativeEvent.touches[0] && ev.nativeEvent.touches[0].pageX;
  }
  _touchEnd(ev) {
    const touchEndX = ev.nativeEvent.changedTouches[0] && ev.nativeEvent.changedTouches[0].pageX;
    if (this._touchStartX && touchEndX) {
      if (touchEndX > this._touchStartX) {
        this._next();
      } else if (touchEndX < this._touchStartX) {
        this._prev();
      }
    }
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
      <div className="gallerymodal" onTouchStart={(ev) => this._touchStart(ev)} onTouchEnd={(ev) => this._touchEnd(ev)}>
        <button className="gallerymodal__close" onClick={() => this._close()}>
          <Icon name="times" />
        </button>
        <div className="gallerymodal__prev" onClick={() => this._prev()}>
          <button className="gallerymodal__prev__button">
            <Icon name="angle-left" />
          </button>
        </div>
        <div className="gallerymodal__next" onClick={() => this._next()}>
          <button className="gallerymodal__next__button">
            <Icon name="angle-right" />
          </button>
        </div>
        <img className="gallerymodal__img" src={this.props.uris[this.state.index]} />
      </div>
    );
  }
}
