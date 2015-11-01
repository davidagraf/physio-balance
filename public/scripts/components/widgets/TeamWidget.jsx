import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';
import TeamModal from 'scripts/components/modals/TeamModal.jsx';

import maxUndMoritz from 'imgs/maxundmoritz.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget img={maxUndMoritz} text={'Team'} modal={<TeamModal />} />
    );
  }
}
