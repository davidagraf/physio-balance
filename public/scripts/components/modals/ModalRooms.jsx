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
      <Modal title="räumlichkeiten">
        <p>
          Wir bieten eine top moderne Infrastruktur mit zwei freundlichen Behandlungsräumen und einem hellen,
          grosszügigen Aktivraum inkl. Duschmöglichkeit.
        </p>
        <p>
          Alle Räumlichkeiten sind ohne Stufen erreichbar.
        </p>
        <p>
          Die Praxis liegt wenige Schritte vom Widenplatz, der genügend Parkmöglichkeiten bietet, entfernt. Ein
          markierter Parkplatz steht direkt vor der Praxis zur Verfügung.
        </p>
        <p>
          Von den Bushaltestellen Oberdorf und Unterdorf sind wir in wenigen Minuten zu Fuss gut zu erreichen.
        </p>
      </Modal>
    );
  }
}
