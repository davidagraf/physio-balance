import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalTeam from 'scripts/components/modals/ModalTeam.jsx';

import img from 'imgs/team2.png';

export default class extends React.Component {
  render() {
    return (
      <Widget img={img} text={'team'} modal={<ModalTeam />} />
    );
  }
}
