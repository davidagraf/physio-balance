import React from 'react';
import Modal from './Modal.jsx';
import Li from '../atomic/Li.jsx';
import Splitview from '../atomic/Splitview.jsx';
import Link from '../atomic/Link.jsx';
import Icon from '../atomic/Icon.jsx';

import Mirjam from '../../imgs/portraits/MirjamTeam.jpg';
import Catrina from '../../imgs/portraits/CatrinaTeam.jpg';
import Larissa from '../../imgs/portraits/LarissaTeam.jpg';
import lebenslaufMD from '../../documents/Lebenslauf_MD_Mai23.pdf';
import lebenslaufCW from '../../documents/Lebenslauf_CW_Mai23.pdf';
import lebenslaufLM from '../../documents/Lebenslauf_LM_Mai24.pdf';


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
              <Li>manuelle therapie nach r. sohier</Li>
              <Li>leukotape k - instruktorin</Li>
              <Li>triggerpunkt, orthomolekulare medizin, sportosteopathie</Li>
              <Li>personal training, sling training, pilates, schwindeltherapie</Li>
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

        <h2 className="h2--space">catrina windlin</h2>
        <Splitview
          left = {
            <img src={Catrina} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>manuelle therapie nach maitland level 2a</Li>
              <Li>manuelle lymphdrainage</Li>
              <Li>pilates</Li>
              <Li>GLA:D arthrose therapeutin</Li>
              <Li>triggerpunkttherapie, myofasziales taping</Li>
              <Li>kiefergelenktherapie, schwindeltherapie</Li>
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

        <h2 className="h2--space">larissa mösli</h2>
        <Splitview
          left = {
            <img src={Larissa} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>manuelle therapie nach vollmer</Li>
              <Li>manuelle lymphdrainage</Li>
              <Li>sportphysiotherapie esp i.A.</Li>
              <Li>GLA:D arthrose therapeutin, GLA:D rücken therapeutin</Li>
              <Li>triggerpunkttherapie</Li>
              <Li>dry needling, triggerpunkttherapie</Li>
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
