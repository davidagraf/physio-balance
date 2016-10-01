import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Li from 'scripts/components/atomic/Li.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';

import Mirjam from 'imgs/mirjam.jpg';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Team">
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
