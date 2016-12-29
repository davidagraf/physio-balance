import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import Li from 'scripts/components/atomic/Li.jsx';

import Link from 'scripts/components/atomic/Link.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import formularWord from 'documents/Verordnung_zur_Physiotherapie.docx';
import formularPDF from 'documents/Verordnung_zur_Physiotherapie.pdf';

export default class extends React.Component {
  render() {
    return (
      <Modal title="angebot">
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
				<p>
          <Link icon={<Icon name="file-pdf-o" />} href={formularPDF}>Verordnungsformular</Link>
        <br/>
          <Link icon={<Icon name="file-word-o" />} href={formularWord}>Verordnungsformular</Link>
        </p>
      </Modal>
    );
  }
}
