import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Preise">
        <table>
          <tbody>
            <tr>
              <td>Gruppen&shy;kurse</td>
              <td>Jahres&shy;abo</td>
              <td>Fr. 950.--</td>
            </tr>
            <tr>
              <td></td>
              <td>Halb&shy;jahres&shy;abo</td>
              <td>Fr. 580.--</td>
            </tr>
            <tr>
              <td></td>
              <td>10er Karte</td>
              <td>Fr. 250.--</td>
            </tr>
            <tr>
              <td>Gruppen&shy;kurse Outdoor</td>
              <td>Er&shy;wach&shy;se&shy;ne</td>
              <td>Aktivitäten abhängig</td>
            </tr>
            <tr>
              <td></td>
              <td>Kinder</td>
              <td>Fr. 15.-- / pro Anlass</td>
            </tr>
            <tr>
              <td>Personal Training</td>
              <td>Pro 60 Minuten</td>
              <td>Fr. 120.--</td>
            </tr>
          </tbody>
        </table>
        <p>
          Bei Abschluss eines Abos nach Wahl bis und mit 9.1.2016 gewähren wir einen Rabatt von 25%!!!
        </p>
      </Modal>
    );
  }
}
