import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'scripts/components/atomic/Icon.jsx';

export default class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.startIndex
    }
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
    const style = {
      'background-image': `url("${this.props.uris[this.state.index]}")`
    };
    return (
      <div className="gallerymodal" onTouchStart={(ev) => this._touchStart(ev)}
        onTouchEnd={(ev) => this._touchEnd(ev)}>
        <button className="gallerymodal__close" onClick={() => this.props.close()}>
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
        <div className="gallerymodal__imgwrapper">
          <div className="gallerymodal__img" style={style} />
        </div>
      </div>
    );
  }
}

GalleryModal.propTypes = {
  uris: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex : PropTypes.number.isRequired,
  close: PropTypes.func.isRequired
};
