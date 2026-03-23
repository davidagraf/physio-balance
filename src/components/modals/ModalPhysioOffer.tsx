import Modal from './Modal.jsx';
import Li from '../atomic/Li.jsx';
import Link from '../atomic/Link.jsx';
import { Icon } from '../atomic/Icon';
import Gallery from '../atomic/Gallery.jsx';

import formularWord from '../../documents/Verordnung_zur_Physiotherapie.docx?url';
import formularPDF from '../../documents/Verordnung_zur_Physiotherapie.pdf?url';

export default function ModalPhysioOffer() {
  const imgsModules = import.meta.glob('../../imgs/gallery/offer/*.jpg', { eager: true, import: 'default' });
  const imgs = Object.values(imgsModules) as string[];
  
  return (
    <Modal title="angebot">
      <ul>
        <Li>rehabilitation</Li>
        <Li>sportphysiotherapie</Li>
        <Li>manuelle therapie</Li>
        <Li>triggerpunkttherapie</Li>
        <Li>kiefergelenkstherapie</Li>
        <Li>massage</Li>
        <Li>kinesiologisches taping</Li>
        <Li>physikalische therapien (ultraschall, pneumatron, wärmeanwendung, elektrotherapie)</Li>
        <Li>domizilbehandlungen</Li>
        <Li>pilates</Li>
        <Li>lymphdrainage</Li>
      </ul>
      <p>
        <Link icon={<Icon name="file-pdf-o" />} href={formularPDF}>Verordnungsformular</Link>
        <br/>
        <Link icon={<Icon name="file-word-o" />} href={formularWord}>Verordnungsformular</Link>
      </p>
      <Gallery uris={imgs} />
    </Modal>
  );
}
