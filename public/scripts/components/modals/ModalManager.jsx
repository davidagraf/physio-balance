import React from 'react';

import ModalStore from 'scripts/stores/ModalStore.js';

export default class extends React.Component {
  state = {
    modal: null
  }
  componentWillMount() {
    this._unsubscribe = ModalStore.subscribe(() => {
      this.setState({modal: ModalStore.getState().modal});
      if (!!ModalStore.getState().modal) {
        document.body.classList.add('noscroll');
      } else {
        document.body.classList.remove('noscroll');
      }
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    return this.state.modal;
  }
}
