import React from 'react';

import Modal from 'scripts/components/modals/Modal.jsx';
import {Emitter} from 'scripts/utils/events.js';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    text: React.PropTypes.string,
    modal: React.PropTypes.element
  }
  static defaultProps = {
    modal: <Modal />
  }
  state = {
    open: false
  }
  componentWillMount() {
    this._closeModal = () => this.setState({open: false});
    Emitter.add(this.props.modal, this._closeModal);
  }
  componentWillUnmount() {
    Emitter.remove(this.props.modal, this._closeModal);
  }
  render() {
    return (
      <div>
        {(this.state.open ? this.props.modal : null)}
        <div className="widget" onClick={() => this.setState({open: true})}>
          <div className="widget__img">
            <img src={this.props.img}/>
          </div>
          <div className="widget__text"><div className="widget__text__content">{
            this.props.text
          }</div></div>
        </div>
      </div>
    );
  }
}
