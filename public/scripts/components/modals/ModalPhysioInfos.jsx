import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Link from 'scripts/components/atomic/Link.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import formularWord from 'documents/Verordnung_zur_Physiotherapie.docx'
import formularPDF from 'documents/Verordnung_zur_Physiotherapie.pdf'

export default class extends React.Component {
  render() {
    return (
      <Modal title="Verordnungsformular">
        <p>
          Physiotherapie ist mit ärztlicher Verordnung eine Dienstleistung der Krankenkassen Grundversicherung.
          Zudem besteht die Möglichkeit ohne Verordnung als Selbstzahler von unserem Angebot zu profitieren
          (60.00 Fr.pro Behandlung).
        </p>
        <p>
          <Link icon={<Icon name="file-pdf-o" />} href={formularPDF}>Verordnungsformular</Link>
          <br/>
          <Link icon={<Icon name="file-word-o" />} href={formularWord}>Verordnungsformular</Link>
        </p>
      </Modal>
    );
  }
}
