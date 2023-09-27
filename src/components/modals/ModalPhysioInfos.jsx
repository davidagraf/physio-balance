import React from 'react';
import Modal from './Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="leistungsabrechnung">
        <p>
          Physiotherapie ist mit ärztlicher Verordnung eine Dienstleistung der Krankenkassen Grundversicherung.
        </p>
        <p>
          Zudem besteht die Möglichkeit ohne Verordnung als Selbstzahler von
          unserem Angebot zu profitieren (60.00Fr. pro 25-minütige Behandlung oder
          120.00Fr. pro 55-minütige Behandlung).
        </p>
      </Modal>
    );
  }
}
