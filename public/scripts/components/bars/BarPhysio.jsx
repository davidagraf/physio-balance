import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

import wirbelsaeule from 'imgs/wirbelsaeule.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        img={wirbelsaeule}
        title="Physiotherapie"
        infos={[
          <div>ihre Gesundheit ist mein Ziel</div>
        ]}
        className="bar--red"
      />
    );
  }
}
