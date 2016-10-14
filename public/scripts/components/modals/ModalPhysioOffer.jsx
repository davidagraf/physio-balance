import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import Li from 'scripts/components/atomic/Li.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Angebot">
        <ul>
          <Li>rehabilitation</Li>
          <Li>sportphysiotherapie</Li>
          <Li>craniosacral therapie</Li>
          <Li>manuelle therapie</Li>
          <Li>massage</Li>
          <Li>kinesiologisches taping</Li>
          <Li>triggerpunkttherapie</Li>
          <Li>physikalische therapie (ultraschall, pneumatron, wärmeanwendung, elektrotherapie)</Li>
        </ul>

        <p className="text--red">
          Eine physiotherapeutische Behandlung dauert ca. 25 Minuten.
        </p>

      </Modal>
    );
  }
}
