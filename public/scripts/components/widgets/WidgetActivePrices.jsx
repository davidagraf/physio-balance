import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalActivePrices from 'scripts/components/modals/ModalActivePrices.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'preise'} modal={<ModalActivePrices/>} />
    );
  }
}
