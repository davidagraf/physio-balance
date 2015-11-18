import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalContact from 'scripts/components/modals/ModalContact.jsx';

import contact from 'imgs/contact.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={contact} text={'Kontakt'} modal={<ModalContact/>} />
    );
  }
}
