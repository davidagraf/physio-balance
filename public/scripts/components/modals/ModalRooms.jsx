import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

import Gallery from 'scripts/components/atomic/Gallery.jsx';

import one from 'imgs/gallery/header-02.jpg';
import two from 'imgs/gallery/image_kurse.jpg';
import three from 'imgs/gallery/p4.jpg';
import four from 'imgs/gallery/Physiotherapie-1.png';
import five from 'imgs/gallery/physiotherapie.jpg';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Rooms">
        <Gallery uris={[one, two, three, four, five]} />
        <p>
          Top moderne Infrastruktur mit einem grosszügigen Aktivraum, zwei freundlichen Behandlungsräumen, Duschen und
          WC.
        </p>
        <p>
          Eine Spiegelwand und ein ausgeklügeltes Soundsystem machen das Training zur wahren Freude. Eine aktive
          Wohlfühloase!:-)
        </p>
        <p>
          Zur Entspannung während den passiven Therapieeinheiten tragen die komfortablen und hochwertigen
          Behandlungsliegen bei.
        </p>
      </Modal>
    );
  }
}
