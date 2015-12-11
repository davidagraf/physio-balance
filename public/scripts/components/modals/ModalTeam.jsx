import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import Mirjam from 'imgs/mirjam.jpg';
import Denise from 'imgs/denise.jpg';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Team">
        <h2>denise</h2>
        <div className="splitview">
          <div className="splitview__left">
          <img src={Denise} width="100" />
          </div>
          <div className="splitview__right">
            <ul>
              <li>sypoba instruktorin basic & progressive</li>
              <li>personal training</li>
              <li>faszien fitness</li>
            </ul>
          </div>
        </div>
        <p>
          Ich motiviere jung und alt, um Stabilisation, Balance und koordinativen Fähigkeiten mittels effektiven
          Ganzkörpertrainings zu verbessern. Beweglichkeit durch geschmeidige Faszien und ein funktionstüchtiges
          Herzkreislauf-System werden mit viel Freude und durch mein Engagement trainiert.
        </p>


        <h2>mirjam</h2>
        <div className="splitview">
          <div className="splitview__left">
            <img src={Mirjam} width="100" />
          </div>
          <div className="splitview__right">
            <ul>
              <li>dipl. physiotherapeutin fh</li>
              <li>personal training</li>
              <li>sling training, faszien fitness</li>
            </ul>
          </div>
        </div>

        <p>
          Durch gezieltes Training möchte ich dein persönliches Wohlbefinden steigern. Die individuelle Betreuung
          liegt mir dabei sehr am Herzen.
        </p>

      </Modal>
    );
  }
}
