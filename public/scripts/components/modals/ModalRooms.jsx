import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

// import Gallery from 'scripts/components/atomic/Gallery.jsx';

// import one from 'imgs/gallery/header-02.jpg';
// import two from 'imgs/gallery/image_kurse.jpg';
// import three from 'imgs/gallery/p4.jpg';
// import four from 'imgs/gallery/Physiotherapie-1.png';
// import five from 'imgs/gallery/physiotherapie.jpg';

// <Gallery uris={[one, two, three, four, five]} />

export default class extends React.Component {
  render() {
    return (
      <Modal title="Räumlichkeiten">

        <p>
          Wir bieten eine top moderne Infrastruktur mit einem grosszügigen Aktivraum, zwei
          freundlichen Behandlungsräumen, Duschen und WC. Zur Entspannung während den passiven Therapieeinheiten
          tragen die komfortablen und hochwertigen
          Behandlungsliegen bei.
        </p>
        <p className="text-center">
          <i>&laquo;eine Wohlfühloase&raquo;</i>
        </p>
      </Modal>
    );
  }
}
