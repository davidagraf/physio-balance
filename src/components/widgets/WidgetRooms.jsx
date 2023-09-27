import React from 'react';

import Widget from './Widget.jsx';

import img from '../../imgs/widgets/room.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={img}
        text={'räumlichkeiten'} path="/rooms" />
    );
  }
}
