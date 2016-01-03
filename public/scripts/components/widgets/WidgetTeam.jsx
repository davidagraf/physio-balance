import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import ModalTeam from 'scripts/components/modals/ModalTeam.jsx';

import img from 'imgs/widgets/team.png';

export default class extends React.Component {
  render() {
    return (
      <Widget img={img} text={'team'} modal={<ModalTeam />} />
    );
  }
}
