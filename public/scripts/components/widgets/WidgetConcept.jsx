import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalConcept from 'scripts/components/modals/ModalConcept.jsx';

import img from 'imgs/team.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={img} text={'wir stellen uns vor'} modal={<ModalConcept/>} />
    );
  }
}
