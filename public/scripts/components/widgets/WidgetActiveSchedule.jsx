import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import agenda from 'imgs/widgets/agenda.png';

export default class extends React.Component {
  render() {
    return (
      <Widget img={agenda} text={'wochenplan'} path="/activeschedule" />
    );
  }
}
