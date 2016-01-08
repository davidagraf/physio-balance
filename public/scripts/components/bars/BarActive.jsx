import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

import sypoba from 'imgs/sypoba.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        img={<img className="bar__img--active" src={sypoba} />}
        title="Aktiv"
        subtitle={<div>&laquo;Leben ist Bewegung,<br/>Bewegung ist Gesundheit,<br/>Gesundheit ist Leben&raquo;</div>}
        className="bar--blue"
        buttonStart={true}
      />
    );
  }
}
