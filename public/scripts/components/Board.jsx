import React from 'react';
import {Emitter, Constants} from 'scripts/utils/events.js';

export default class extends React.Component {
  static propTypes = {
    widgets: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
    modals: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  }
  state = {
    modal: null
  }
  that = this
  _openModal(index) {
    this.setState({modal: this.props.modals[index]});
  }
  componentWillMount() {
    this._closeModal = () => this.setState({modal: null});
    Emitter.add(Constants.MODAL_CLOSE, this._closeModal);
  }
  componentWillUnmount() {
    Emitter.remove(Constants.MODAL_CLOSE, this._closeModal);
  }
  render() {
    let big;

    if (this.state.modal) {
      big = (
        <div className="modal">
          <div className="modal__scroll">
            { this.state.modal }
          </div>
        </div>
      );
    }

    return (
      <div>{big}
        <div className="board">
          <div className="board__content">{
              this.props.widgets.map(
                (child, index) => <div key={index} onClick={() => this._openModal(index)}>{child}</div>
              )
          }</div>
        </div>
      </div>
    );
  }
}
