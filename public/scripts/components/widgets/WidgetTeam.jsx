import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalTeam from 'scripts/components/modals/ModalTeam.jsx';

import img from 'imgs/SMC-Managing-Teams.jpeg';

export default class extends React.Component {
  render() {
    return (
      <Widget img={img} text={'Team'} modal={<ModalTeam />} />
    );
  }
}
