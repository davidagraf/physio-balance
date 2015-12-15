import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  static propTypes = {
    uris: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    startIndex : React.PropTypes.number.isRequired
  }
  state = {
    index: this.props.startIndex
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
      <Modal>
        <img src={this.props.uris[this.state.index]} />
      </Modal>
    );
  }
}
