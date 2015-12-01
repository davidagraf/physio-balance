import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Angebot">
        <p>
          Rehabilitation
          Sportphysiotherapie
          Manuelle Therapie
          Massage
          Kinesiologisches Taping
          Triggerpunkttherapie
          Physikalische Therapie
        </p>

        <p>
          Eine physiotherapeutische Behandlung dauert ca. 25 Minuten.
          Lebenslauf Mirjam Böni als PDF
        </p>

      </Modal>
    );
  }
}
