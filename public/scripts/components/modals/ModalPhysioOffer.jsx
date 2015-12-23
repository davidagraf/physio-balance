import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import lebenslauf from 'documents/Lebenslauf_MB_pb.pdf';

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

        <p>
          Eine physiotherapeutische Behandlung dauert ca. 25 Minuten.
        </p>
        <p>
          <Icon name="file-pdf-o"/> <a href={lebenslauf}>Lebenslauf Mirjam Böni</a>
        </p>

      </Modal>
    );
  }
}
