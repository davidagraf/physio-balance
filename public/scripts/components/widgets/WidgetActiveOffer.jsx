import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalActiveOffer from 'scripts/components/modals/ModalActiveOffer.jsx';

import sypoba2 from 'imgs/sypoba2.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={sypoba2} text={'angebot'} modal={<ModalActiveOffer/>} />
    );
  }
}
