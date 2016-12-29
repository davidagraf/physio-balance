import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="leistungsabrechnung">
        <p>
          Physiotherapie ist mit ärztlicher Verordnung eine Dienstleistung der Krankenkassen Grundversicherung.
          Zudem besteht die Möglichkeit ohne Verordnung als Selbstzahler von unserem Angebot zu profitieren
          (60.00 Fr. pro 25-minütige Behandlung).
        </p>
      </Modal>
    );
  }
}
