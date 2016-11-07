import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Li from 'scripts/components/atomic/Li.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';
import Link from 'scripts/components/atomic/Link.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import Mirjam from 'imgs/mirjam.jpg';
import Carmen from 'imgs/carmen.jpg';
import lebenslaufMB from 'documents/Lebenslauf_MB_pb.pdf';
import lebenslaufCB from 'documents/Lebenslauf_CB.pdf';

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
              <Li>msc. sports physiotherapy</Li>
              <Li>leukotape k - instruktorin</Li>
              <Li>manuelle therapie nach r. sohier</Li>
              <Li>triggerpunkt, orthomolekulare medizin, sportosteopathie</Li>
              <Li>personal training, sling training</Li>
            </ul>
          }
        />

        <p>
          Durch gezielte Therapie und angepasstes Training möchte ich dein persönliches Wohlbefinden steigern.
          Die individuelle Betreuung liegt mir dabei sehr am Herzen.
        </p>
        <p>
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufMB} newWindow={true}>Lebenslauf</Link>
        </p>

        <h2>carmen</h2>
        <Splitview
          left = {
            <img src={Carmen} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>craniosacral therapeutin</Li>
              <Li>funktionelles elastisches taping (mtc und ntc)</Li>
              <Li>manuelle therapie nach cyriax</Li>
              <Li>medizinische klangschalentherapie</Li>
            </ul>
          }
        />

        <p>
          Durch eine ganzheitliche und individuelle Betreuung möchte ich zusammen mit dir eine Verbesserung deines
          Gesundheitszustandes erreichen und somit dein Wohlbefinden steigern.
        </p>
        <p>
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufCB} newWindow={true}>Lebenslauf</Link>
        </p>

      </Modal>
    );
  }
}
