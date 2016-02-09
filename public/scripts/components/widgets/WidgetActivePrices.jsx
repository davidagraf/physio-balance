import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import coins from 'imgs/widgets/coins.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={coins} text={'preise'} path="/activeprices" />
    );
  }
}
