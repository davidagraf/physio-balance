import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

export default class extends React.Component {
  render() {
    return (
      <Bar
        title="Physiotherapie"
        className="bar--red"
      />
    );
  }
}
