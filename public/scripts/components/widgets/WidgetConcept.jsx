import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

export default class extends React.Component {
  render() {
    return (
      <Widget
        text={'philosophie'} path="/concept" />
    );
  }
}
