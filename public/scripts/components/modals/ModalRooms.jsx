import React from 'react';
import Modal from 'scripts/components/modals/Modal.jsx';

export default class extends React.Component {
  render() {
    return (
      <Modal title="Rooms">
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
