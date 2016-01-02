import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalPhysioOffer from 'scripts/components/modals/ModalPhysioOffer.jsx';

import tape from 'imgs/tape.png';

export default class extends React.Component {
  render() {
    return (
      <Widget img={tape}
        text={'angebot'} modal={<ModalPhysioOffer/>} />
    );
  }
}
