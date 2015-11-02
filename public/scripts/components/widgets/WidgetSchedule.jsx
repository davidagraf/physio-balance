import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalSchedule from 'scripts/components/modals/ModalSchedule.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget text={'Wochenplan'} modal={<ModalSchedule />} />
    );
  }
}
