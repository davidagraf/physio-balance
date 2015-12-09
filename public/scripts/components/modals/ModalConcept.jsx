import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Wir stellen uns vor">
        <p>
          Gesundheit ist das grösste und wichtigste Gut des Menschen, welches gepflegt werden muss. Dazu bedarf es
          gezielte Prävention und allenfalls Rehabilitation.
        </p>
        <p>
          physio balance setzt sich zum Ziel genau dies zu betreiben, sich aber von herkömmlichen Fitnessinstitutionen
          abzuheben.
        </p>
        <p>
          Kompetent ausgebildete Instruktoren bieten ein breites Spektrum an Indoor und Outdoor Aktivitäten für jedes
          Alter an. Rehabilitative Massnahmen werden durch die integrierte Physiotherapiepraxis gedeckt. Die dadurch
          entstehenden Synergien ermöglichen eine qualitativ hochstehende Betreuung des Kunden.
        </p>
        <p>
          Das entscheidende Kernelement, die Begeisterung an der Bewegung, wird bei uns gross geschrieben. Ein Training
          das mit Freude durchgeführt wird, ist effizienter und der Effekt nachhaltiger.
        </p>
        <p>
          physio balance gmbh mit den Gesellschafterinnen Denise und Mirjam nimmt die Tätigkeit im Januar 2016 auf.
        </p>
      </Modal>
    );
  }
}
