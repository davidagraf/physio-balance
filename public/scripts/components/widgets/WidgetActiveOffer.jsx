import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalActiveOffer from 'scripts/components/modals/ModalActiveOffer.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'angebot'} modal={<ModalActiveOffer/>} />
    );
  }
}
