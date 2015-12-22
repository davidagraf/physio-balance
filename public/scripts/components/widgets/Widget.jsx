import React from 'react';

import Modal from 'scripts/components/modals/Modal.jsx';

import ModalStore from 'scripts/stores/ModalStore.js';
import { MODAL_OPEN } from 'scripts/constants/ActionTypes.js';

import placeholder from 'imgs/placeholder.png';

export default class extends React.Component {
  static propTypes = {
    img: React.PropTypes.string,
    text: React.PropTypes.string,
    modal: React.PropTypes.element,
    uri: React.PropTypes.string
  }
  static defaultProps = {
    modal: <Modal />
  }
  _openModal() {
    if (this.props.uri) {
      window.open(this.props.uri, '_blank');
    } else {
      ModalStore.dispatch({type: MODAL_OPEN, modal: this.props.modal});
    }
  }
  render() {
    return (
      <div>
        <div className="widget" onClick={() => this._openModal()}>
          <div className="widget__img">
            <img src={this.props.img || placeholder}/>
          </div>
          <div className="widget__text"><div className="widget__text__content">{
            this.props.text
          }</div></div>
        </div>
      </div>
    );
  }
}
