import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalRooms from 'scripts/components/modals/ModalRooms.jsx';

import entry from 'imgs/widgets/entry.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={entry} text={'räumlichkeiten'} modal={<ModalRooms/>} />
    );
  }
}
