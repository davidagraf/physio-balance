import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Li from 'scripts/components/atomic/Li.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';

import Mirjam from 'imgs/mirjam.jpg';
import Denise from 'imgs/denise.jpg';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Team">
        <h2>denise</h2>
        <Splitview
          left = {
            <img src={Denise} width="100" />
          }
          right = {
            <ul>
              <Li>sypoba instruktorin basic & progressive</Li>
              <Li>personal training</Li>
              <Li>faszien fitness</Li>
            </ul>
          }
        />
        <p>
          Ich motiviere jung und alt, um Stabilisation, Balance und koordinativen Fähigkeiten mittels effektiven
          Ganzkörpertrainings zu verbessern. Beweglichkeit durch geschmeidige Faszien und ein funktionstüchtiges
          Herzkreislauf-System werden mit viel Freude und durch mein Engagement trainiert.
        </p>

        <h2>mirjam</h2>
        <Splitview
          left = {
            <img src={Mirjam} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>personal training</Li>
              <Li>sling training, faszien fitness</Li>
            </ul>
          }
        />

        <p>
          Durch gezieltes Training möchte ich dein persönliches Wohlbefinden steigern. Die individuelle Betreuung
          liegt mir dabei sehr am Herzen.
        </p>

      </Modal>
    );
  }
}
