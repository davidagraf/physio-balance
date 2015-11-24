import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalRooms from 'scripts/components/modals/ModalRooms.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'Räumlichkeiten'} modal={<ModalRooms/>} />
    );
  }
}
