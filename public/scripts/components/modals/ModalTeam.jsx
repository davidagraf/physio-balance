import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Li from 'scripts/components/atomic/Li.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';
import Link from 'scripts/components/atomic/Link.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import Mirjam from 'imgs/portraits/MirjamTeam.jpg';
import Catrina from 'imgs/portraits/CatrinaTeam.jpg';
import Larissa from 'imgs/portraits/LarissaTeam.jpg';
import lebenslaufMD from 'documents/Lebenslauf_MD_Aug21.pdf';
import lebenslaufCW from 'documents/Lebenslauf_CW_Aug21.pdf';
import lebenslaufLM from 'documents/Lebenslauf_LM_Aug21.pdf';


export default class extends React.Component {
  render() {
    return (
      <Modal title="team">
        <h2>mirjam dysli-böni</h2>
        <Splitview
          left = {
            <img src={Mirjam} width="100" />
          }
          right = {
            <ul>
              <Li>geschäftsinhaberin physio balance</Li>
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
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufMD} newWindow={true}>Lebenslauf</Link>
        </p>

        <h2>catrina windlin</h2>
        <Splitview
          left = {
            <img src={Catrina} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>manuelle therapie nach maitland level 2a</Li>
              <Li>triggerpunkttherapie</Li>
              <Li>myofasziales taping</Li>
              <Li>kiefergelenktherapie</Li>
            </ul>
          }
        />

        <p>
          Eine lösungsorientierte Behandlung, die individuell auf dich abgestimmt ist, steht für mich im Vordergrund.
          Mit viel Engagement und breitem Fachwissen begleite ich dich zu deinem Ziel! 
        </p>
        <p>
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufCW} newWindow={true}>Lebenslauf</Link>
        </p>

        <h2>larissa mösli</h2>
        <Splitview
          left = {
            <img src={Larissa} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>medical taping</Li>
              <Li>manuelle therapie</Li>
            </ul>
          }
        />

        <p>
          Gesundheit ist leichter verloren als wiedergewonnen. Daher begleite ich dich bestmöglich mit meinem
          Wissen in Richtung Gesundheit.
        </p>
        <p>
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufLM} newWindow={true}>Lebenslauf</Link>
        </p>

      </Modal>
    );
  }
}
