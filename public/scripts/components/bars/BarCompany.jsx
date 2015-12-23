import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import logo from 'imgs/logo/pb_logo_color_rgb.png';

export default class extends React.Component {
  render() {
    return (
      <Bar
        title={<img src={logo}/>}
        subtitle="&laquo;das gesundheitszentrum für prävention und rehabilitation&raquo;"
        infos={[
          <div><Icon name="map-marker"/> widengasse 16 5070 frick</div>,
          <div><Icon name="phone"/> +41 62 871 16 20</div>,
          <div><Icon name="envelope"/> team@physiobalance.fit</div>
        ]}
        className="bar--green"
      />
    );
  }
}
