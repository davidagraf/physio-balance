import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import img from 'imgs/widgets/philosophie.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={img}
        text={'philosophie'} path="/concept" />
    );
  }
}
