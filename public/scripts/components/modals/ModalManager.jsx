import React from 'react';

import ModalStore from 'scripts/stores/ModalStore.js';
import { MODAL_CLOSE } from 'scripts/constants/ActionTypes.js';

export default class extends React.Component {
  state = {
    modals: []
  }
  _checkEsc(ev) {
    if (ev.keyCode === 27) {
      ModalStore.dispatch({type: MODAL_CLOSE});
    }
  }
  componentWillMount() {
    this._unsubscribe = ModalStore.subscribe(() => {
      this.setState({modals: ModalStore.getState().modals});
    });
  }
  componentDidMount() {
    this._checkEscThis = this._checkEsc.bind(this);
    window.addEventListener('keydown', this._checkEscThis);
  }
  componentWillUnmount() {
    this._unsubscribe();
    window.removeEventListener('keydown', this._checkEscThis);
  }
  componentDidUpdate() {
    if (this.state.modals.length > 0) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  }
  render() {
    return (
      <div>{this.state.modals.map((modal, i) => {
        return <div className="modalmanager" key={i} style={{zIndex : 300 + i}}>{modal}</div>
      })}</div>
    );
  }
}
