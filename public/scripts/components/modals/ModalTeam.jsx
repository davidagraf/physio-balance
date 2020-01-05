import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Li from 'scripts/components/atomic/Li.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';
import Link from 'scripts/components/atomic/Link.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import Mirjam from 'imgs/portraits/131.jpg';
import Catrina from 'imgs/portraits/windlin.jpg';
import Mario from 'imgs/portraits/muilwijk.jpg';
import lebenslaufMD from 'documents/Lebenslauf_MD.pdf';
import lebenslaufCW from 'documents/Lebenslauf_catrina_windlin.pdf';


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

        <h2>mario muilwijk</h2>
        <Splitview
          left = {
            <img src={Mario} width="100" />
          }
          right = {
            <ul>
              <Li>dipl. physiotherapeut (zulassung schweiz &amp; holland)</Li>
              <Li>manuelle lymphdrainage nach vodder </Li>
              <Li>faszien distortions modell</Li>
              <Li>fascial manipulation</Li>
              <Li>dry needling extremitaten, wirbelsaule und kiefer</Li>
              <Li>strength &amp; conditioning specialist</Li>
              <Li>kinesiotaping kenzo kase</Li>
              <Li>mulligan concept</Li>
            </ul>
          }
        />

      </Modal>
    );
  }
}
