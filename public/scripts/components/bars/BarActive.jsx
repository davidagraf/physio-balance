import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';

import men from 'imgs/men.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        img={men}
        imgRight={true}
        title={'Aktiv'}
        infos={[
          <div>Leben is Bewegung,<br/>Bewegung ist Gesundheit,<br/>Gesundheit ist Leben</div>
        ]}
        className="bar--blue"
        buttonStart={true}
      />
    );
  }
}
