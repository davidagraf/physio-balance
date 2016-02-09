import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import sypoba2 from 'imgs/widgets/sypoba.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={sypoba2} text={'angebot'} path="/activeoffer" />
    );
  }
}
