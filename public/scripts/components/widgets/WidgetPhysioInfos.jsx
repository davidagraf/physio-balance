import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalPhysioInfos from 'scripts/components/modals/ModalPhysioInfos.jsx';

import formular from 'imgs/formular.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={formular}
        text={'verordnungsformular'} modal={<ModalPhysioInfos/>} />
    );
  }
}
