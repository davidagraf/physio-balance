import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';
import Li from 'scripts/components/atomic/Li.jsx';

import lebenslauf from 'documents/Lebenslauf_MB_pb.pdf';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Angebot">
        <ul>
          <Li>Rehabilitation</Li>
          <Li>Sportphysiotherapie</Li>
          <Li>Manuelle Therapie</Li>
          <Li>Massage</Li>
          <Li>Kinesiologisches Taping</Li>
          <Li>Triggerpunkttherapie</Li>
          <Li>Physikalische Therapie</Li>
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
