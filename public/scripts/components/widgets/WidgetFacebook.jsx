import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalFacebook from 'scripts/components/modals/ModalFacebook.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'Facebook'} modal={<ModalFacebook/>} />
    );
  }
}
