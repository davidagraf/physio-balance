import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalRooms from 'scripts/components/modals/ModalRooms.jsx';

import room from 'imgs/room.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={room} text={'räumlichkeiten'} modal={<ModalRooms/>} />
    );
  }
}
