import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalActiveSchedule from 'scripts/components/modals/ModalActiveSchedule.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget text={'wochenplan'} modal={<ModalActiveSchedule />} />
    );
  }
}
