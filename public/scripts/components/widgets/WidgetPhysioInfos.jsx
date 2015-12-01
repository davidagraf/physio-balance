import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalPhysioInfos from 'scripts/components/modals/ModalPhysioInfos.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'wichtige informationen'} modal={<ModalPhysioInfos/>} />
    );
  }
}
