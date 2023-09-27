import React from 'react';

import Widget from './Widget.jsx';

import img from '../../imgs/widgets/angebot.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget img={img}
        text={'angebot'} path="/physiooffer" />
    );
  }
}
