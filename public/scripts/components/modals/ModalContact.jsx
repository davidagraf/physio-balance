import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import GoogleMap from 'scripts/components/atomic/GoogleMap.jsx';
import Square from 'scripts/components/atomic/Square.jsx';

export default class ModalContact extends React.Component {
  render() {
    return (
      <Modal title="kontakt" contentClassName="modal__content--contact">
        <div>
          <p>
            mirjam dysli-böni<br/>
            carmen brugger<br/>
            mirjam bölsterli<br/>
            kathrin schmid
          </p>
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
