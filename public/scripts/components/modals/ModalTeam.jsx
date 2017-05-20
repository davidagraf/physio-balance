import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Li from 'scripts/components/atomic/Li.jsx';
import Splitview from 'scripts/components/atomic/Splitview.jsx';
import Link from 'scripts/components/atomic/Link.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import Mirjam from 'imgs/mirjam.jpg';
import Carmen from 'imgs/carmen.jpg';
import MirjamB from 'imgs/mirjamb.jpg';
import lebenslaufMD from 'documents/Lebenslauf_MD_Okt_2016.pdf';
import lebenslaufCB from 'documents/Lebenslauf_CB.pdf';
import lebenslaufMB from 'documents/Lebenslauf_MB.pdf';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Team">
        <h2>mirjam dysli</h2>
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
          <Link icon={<Icon name="file-pdf-o" />} href={lebenslaufMD} newWindow={true}>Lebenslauf</Link>
        </p>

        <h2>carmen brugger</h2>
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

				<h2>mirjam bölsterli</h2>
				<Splitview
					left = {
						<img src={MirjamB} width="100" />
					}
					right = {
						<ul>
							<Li>dipl. physiotherapeutin fh</Li>
							<Li>dipl. craniosacral therapeutin</Li>
							<Li>manuelle therapie nach samt</Li>
							<Li>kinesio taping nach dr. kenzo kase</Li>
							<Li>esp sportphysiotherapie (wirbelsäule, knie, schulter)</Li>
							<Li>fussreflexzonentherapie</Li>
						</ul>
					}
				/>

				<h3>klassische physiotherapie trifft auf ganzheitliche körperarbeit</h3>
				<p>
					Mit zunehmender Berufserfahrung haben mich vermehrt Systeme interessiert, in welchen der
					Mensch als Ganzes
					betrachtet wird. So stehen mir heute sehr unterschiedliche Ansätze für die individuelle
					Behandlung zur Verfügung, von der klassischen Physiotherapie bis hin zur Stimulation der
					Selbstheilungskräfte, um deinem Körper die Möglichkeit zu geben, sein Gleichgewicht wieder
					zu finden.
				</p>
				<p>
					<Link icon={<Icon name="file-pdf-o" />} href={lebenslaufMB} newWindow={true}>Lebenslauf</Link>
				</p>

      </Modal>
    );
  }
}
