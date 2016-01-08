import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

import wirbelsaeule from 'imgs/wirbelsaeule.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        img={<img className="bar__img--physio" src={wirbelsaeule} />}
        title="Physio&shy;therapie"
        subtitle="&laquo;ihre Gesundheit ist mein Ziel&raquo;"
        className="bar--red"
      />
    );
  }
}
