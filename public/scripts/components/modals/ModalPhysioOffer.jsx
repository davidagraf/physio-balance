import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import Li from 'scripts/components/atomic/Li.jsx';

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

      </Modal>
    );
  }
}
