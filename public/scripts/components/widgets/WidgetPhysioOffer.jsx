import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalPhysioOffer from 'scripts/components/modals/ModalPhysioOffer.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'angebot'} modal={<ModalPhysioOffer/>} />
    );
  }
}
