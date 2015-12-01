import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Wichtige Informationen">
        <p>
          Physiotherapie ist mit ärztlicher Verordnung eine Dienstleistung der Krankenkassen Grundversicherung.
          Zudem besteht die Möglichkeit ohne Verordnung als Selbstzahler von unserem Angebot zu profitieren
          (65.00 Fr.pro Behandlung).
        </p>
      </Modal>
    );
  }
}
