import React from 'react';
import Modal from './Modal.jsx';

import GoogleMap from '../atomic/GoogleMap.jsx';
import Square from '../atomic/Square.jsx';

export default class ModalContact extends React.Component {
  render() {
    return (
      <Modal title="kontakt" contentClassName="modal__content--contact">
        <div>
          <p>
            <b>physio balance</b><br/>
            widengasse 16<br/>
            5070 frick
          </p>
          <p>
            team@physiobalance.fit<br/>
            062 871 16 20
          </p>
        </div>
        <div>
          <Square>
            <GoogleMap address="Widengasse 16 5070 Frick" />
          </Square>
        </div>
      </Modal>
    );
  }
}
