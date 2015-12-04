import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Angebot">
        <ul>
          <li>Rehabilitation</li>
          <li>Sportphysiotherapie</li>
          <li>Manuelle Therapie</li>
          <li>Massage</li>
          <li>Kinesiologisches Taping</li>
          <li>Triggerpunkttherapie</li>
          <li>Physikalische Therapie</li>
        </ul>

        <ul>
          <li>Eine physiotherapeutische Behandlung dauert ca. 25 Minuten.</li>
          <li>Lebenslauf Mirjam Böni als PDF</li>
        </ul>

      </Modal>
    );
  }
}
