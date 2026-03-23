import Modal from './Modal.jsx';
import Li from '../atomic/Li.jsx';
import Splitview from '../atomic/Splitview.jsx';
import Link from '../atomic/Link.jsx';
import { Icon } from '../atomic/Icon';

import Mirjam from '../../imgs/portraits/MirjamTeam.jpg';
import Larissa from '../../imgs/portraits/LarissaTeam.jpg';
import Saskia from '../../imgs/portraits/SaskiaTeam.jpeg';
import lebenslaufMD from '../../documents/Lebenslauf_MD_Mrz26.pdf';
import lebenslaufLM from '../../documents/Lebenslauf_LM_Mai24.pdf';
import lebenslaufSM from '../../documents/Lebenslauf_SM_Mrz26.pdf';


export default function ModalTeam() {
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
              <Li>leukotape k</Li>
              <Li>triggerpunkt, orthomolekulare medizin, kiefergelenktherapie</Li>
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

        <h2 className="h2--space">saskia mahrer</h2>
        <Splitview
          left = {
            <img src={Saskia} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeutin fh</Li>
              <Li>manuelle therapie nach maitland</Li>
              <Li>medical taping</Li>
              <Li>schwindeltherapie</Li>
              <Li>triggerpunkttherapie, dry needling</Li>
              <Li>bobath, expert geriattrische rehabiliation</Li>
            </ul>
          }
        />

        <p>
          Mit viel Herz und Fachwissen, begleite ich dich nachhaltig beim erreichen deiner Ziele. Ich biete dir Therapie die zuhört und auf dich abgestimmt ist.
        </p>
        <p>
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufSM} newWindow={true}>Lebenslauf</Link>
        </p>

    </Modal>
  );
}
