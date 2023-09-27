import React from 'react';

import Widget from './Widget.jsx';

import team from '../../imgs/widgets/team.jpeg';

export default class extends React.Component {
  render() {
    return (
      <Widget img={team} text={'team'} path="/team" />
    );
  }
}
