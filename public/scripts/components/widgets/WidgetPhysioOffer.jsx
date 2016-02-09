import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import tape from 'imgs/widgets/tape.png';

export default class extends React.Component {
  render() {
    return (
      <Widget img={tape}
        text={'angebot'} path="/physiooffer" />
    );
  }
}
