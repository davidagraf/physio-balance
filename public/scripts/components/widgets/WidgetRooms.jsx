import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import entry from 'imgs/widgets/entry.png';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={entry} text={'räumlichkeiten'} path="/rooms" />
    );
  }
}
