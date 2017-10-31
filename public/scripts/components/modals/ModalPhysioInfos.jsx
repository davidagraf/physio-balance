import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="leistungsabrechnung">
        <p>
          Physiotherapie ist mit ärztlicher Verordnung eine Dienstleistung der Krankenkassen Grundversicherung.
        </p>
        <p>
          Zusätzlich kann die Craniosacral Therapie ohne ärztliche Verordnung über die Krankenkassen Zusatzversicherung
          abgerechnet werden.
        </p>
        <p>
          Zudem besteht die Möglichkeit ohne Verordnung als Selbstzahler von unserem Angebot zu profitieren
          (65.00Fr. pro 25-minütige Behandlung oder 130.00Fr. pro 55-minütige Behandlung).
        </p>
      </Modal>
    );
  }
}
