import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import GoogleMap from 'scripts/components/atomic/GoogleMap.jsx';
import Square from 'scripts/components/atomic/Square.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';


export default class ModalContact extends React.Component {
  render() {
    return (
      <Modal title="Kontakt">
        <Splitview
          left = {
            <div>
              <p>
                Mirjam Böni<br/>
                Carmen Brugger
              </p>
              <p>
                physio balance<br/>
                Widengasse 16<br/>
                5070 Frick
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
