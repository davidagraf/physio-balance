import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import men from 'imgs/men.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        img={men}
        title={'Physio Balance'}
        infos={[
          <div><Icon name="map-marker"/> Widdengasse 16 5070 Frick</div>,
          <div><Icon name="clock-o"/> Mo - Fr 09:00 - 17:00</div>,
          <div><Icon name="phone"/> 061 123 45 67</div>
        ]}
        className="bar--green"
      />
    );
  }
}
