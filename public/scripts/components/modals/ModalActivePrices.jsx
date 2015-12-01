import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Wochenplan">
        <table>
          <tbody>
            <tr>
              <td>Personal Training</td>
              <td>Pro 60 Minuten</td>
              <td>Fr. 120.--</td>
            </tr>
            <tr>
              <td>Gruppenkurse</td>
              <td>Jahresabo</td>
              <td>Fr. 950.--</td>
            </tr>
            <tr>
              <td></td>
              <td>Halbjahresabo</td>
              <td>Fr. 580.--</td>
            </tr>
            <tr>
              <td></td>
              <td>10er Karte</td>
              <td>Fr. 250.--</td>
            </tr>
            <tr>
              <td>Gruppenkurse Outdoor</td>
              <td>Erwachsene</td>
              <td>Aktivitäten abhängig</td>
            </tr>
            <tr>
              <td></td>
              <td>Kinder</td>
              <td>Fr. 15.-- / pro Anlass</td>
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
