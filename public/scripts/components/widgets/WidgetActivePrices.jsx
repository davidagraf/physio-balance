import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalActivePrices from 'scripts/components/modals/ModalActivePrices.jsx';

import coins from 'imgs/coins.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={coins} text={'preise'} modal={<ModalActivePrices/>} />
    );
  }
}
