import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import facebook from 'imgs/facebook.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={facebook} text={'facebook'} uri="https://www.facebook.com/Mammut/" />
    );
  }
}
