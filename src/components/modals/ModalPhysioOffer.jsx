import React from 'react';
import Modal from './Modal.jsx';

import Li from '../atomic/Li.jsx';
import Link from '../atomic/Link.jsx';
import Icon from '../atomic/Icon.jsx';
import Gallery from '../atomic/Gallery.jsx';

import formularWord from '../../documents/Verordnung_zur_Physiotherapie.docx';
import formularPDF from '../../documents/Verordnung_zur_Physiotherapie.pdf';

export default class extends React.Component {
  render() {
    const imgsContext = require.context('../../imgs/gallery/offer/', false, /\.jpg$/);
    const imgs = imgsContext.keys().map(imgsContext);
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
}
