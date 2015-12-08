import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

export default class extends React.Component {
  render() {
    return (
      <Bar
        imgRight={true}
        title="Aktiv"
        subtitle={<div>&laquo;Leben is Bewegung,<br/>Bewegung ist Gesundheit,<br/>Gesundheit ist Leben&raquo;</div>}
        className="bar--blue"
        buttonStart={true}
      />
    );
  }
}
