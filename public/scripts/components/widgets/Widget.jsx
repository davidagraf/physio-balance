import React from 'react';

import Modal from 'scripts/components/modals/Modal.jsx';
import {Emitter} from 'scripts/utils/events.js';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    text: React.PropTypes.string,
    modal: React.PropTypes.element,
    url: React.PropTypes.string
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
  _openModal() {
    if (this.props.url) {
      window.open(this.props.url, '_blank');
    } else if (this.props.modal) {
      this.setState({open: true});
    }
  }
  render() {
    return (
      <div>
        {(this.state.open ? this.props.modal : null)}
        <div className="widget" onClick={() => this._openModal()}>
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
