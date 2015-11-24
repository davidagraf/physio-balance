import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Team">
        <h2>denise</h2>
        <p>
          sypoba instruktorin basic & progressive
          personal training
          faszien fitness
        </p>
        <p>
          Ich motiviere jung und alt, um Stabilisation, Balance und koordinativen Fähigkeiten mittels effektiven
          Ganzkörpertrainings zu verbessern. Beweglichkeit durch geschmeidige Faszien und ein funktionstüchtiges
          Herzkreislauf-System werden mit viel Freude und durch mein Engagement trainiert.
        </p>


        <h2>mirjam</h2>
        <p>
          dipl. physiotherapeutin fh
          personal training
          sling training, faszien fitness
        </p>

        <p>
          Durch gezieltes Training möchte ich dein persönliches Wohlbefinden steigern. Die individuelle Betreuung
          liegt mir dabei sehr am Herzen.
        </p>

      </Modal>
    );
  }
}
