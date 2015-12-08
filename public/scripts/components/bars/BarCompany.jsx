import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import logo from 'imgs/logo/pb_logo_color_rgb.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        title={<img src={logo}/>}
        subtitle="das gesundheitszentrum für prävention und rehabilitation"
        infos={[
          <div><Icon name="map-marker"/> Widengasse 16 5070 Frick</div>,
          <div><Icon name="phone"/> 062 871 16 20</div>,
          <div><Icon name="email"/> team@physiobalance.fit</div>
        ]}
        className="bar--green"
      />
    );
  }
}
