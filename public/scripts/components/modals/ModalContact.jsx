import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import GoogleMap from 'scripts/components/atomic/GoogleMap.jsx';
import Square from 'scripts/components/atomic/Square.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';


export default class ModalContact extends React.Component {
  render() {
    return (
      <Modal title="kontakt">
        <Splitview
          left = {
            <div>
              <p>
                mirjam böni<br/>
                carmen brugger
              </p>
              <p>
                physio balance<br/>
                widengasse 16<br/>
                5070 frick
              </p>
              <p>
                team@physiobalance.fit<br/>
                062 871 16 20
              </p>
            </div>
          }
          right = {
            <Square>
              <GoogleMap address="Widengasse 16 5070 Frick" />
            </Square>
          }
        />
      </Modal>
    );
  }
}
