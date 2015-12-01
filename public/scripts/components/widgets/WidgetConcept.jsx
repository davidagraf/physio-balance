import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalConcept from 'scripts/components/modals/ModalConcept.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'leitbild'} modal={<ModalConcept/>} />
    );
  }
}
