import React from 'react';

import Widget from './Widget.jsx';

import img from '../../imgs/widgets/entry.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={img} text={'kontakt'} path="/contact" />
    );
  }
}
