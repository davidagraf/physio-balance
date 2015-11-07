import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

import men from 'imgs/men.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        img={men}
        title={'Physio'}
        infos={[]}
      />
    );
  }
}
