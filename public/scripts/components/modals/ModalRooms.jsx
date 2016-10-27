import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';
import Gallery from 'scripts/components/atomic/Gallery.jsx';

// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('./modules/', true, /\.js$/));

export default class extends React.Component {
  render() {
    const imgsContext = require.context('imgs/gallery/room/', false, /\.png$/);
    const imgs = imgsContext.keys().map(imgsContext);

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
        <Gallery uris={imgs} />
      </Modal>
    );
  }
}
