import Modal from './Modal.jsx';
import Gallery from '../atomic/Gallery.jsx';

export default function ModalRooms() {
  const imgsModules = import.meta.glob('../../imgs/gallery/room/*.jpg', { eager: true, import: 'default' });
  const imgs = Object.values(imgsModules) as string[];

  return (
    <Modal title="räumlichkeiten">
      <p>
        Wir bieten eine top moderne Infrastruktur mit drei freundlichen Behandlungsräumen und einem hellen,
        grosszügigen Aktivraum inkl. Duschmöglichkeit.
      </p>
      <p>
        Alle Räumlichkeiten sind ohne Stufen erreichbar.
      </p>
      <p>
        Die Praxis liegt wenige Schritte vom Widenplatz, der genügend Parkmöglichkeiten bietet, entfernt. Zwei
        markierte Parkplätze stehen direkt vor der Praxis zur Verfügung.
      </p>
      <p>
        Von den Bushaltestellen Oberdorf und Unterdorf sind wir in wenigen Minuten zu Fuss gut zu erreichen.
      </p>
      <Gallery uris={imgs} />
    </Modal>
  );
}
