import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';
import Icon from 'scripts/components/atomic/Icon.jsx';

import logo from 'imgs/logo/pb_logo_white_rgb.png';
import wirbelsaeule from 'imgs/wirbelsaeule.png';

const MAIL = 'team@physiobalance.fit';
const PHONE = '+41 62 871 16 20';
const ADDRESS = 'widengasse 16 5070 frick';

export default class extends React.Component {
  render() {
    return (
      <Bar
        title={<img src={logo}/>}
        img={<img className="bar__img--company" src={wirbelsaeule} />}
        subtitle="&laquo;das gesundheitszentrum für prävention und rehabilitation&raquo;"
        infos={[
          <div><Icon name="map-marker"/> {ADDRESS}</div>,
          <div><Icon name="phone"/> {PHONE}</div>,
          <div><Icon name="envelope"/> {MAIL}</div>
        ]}
      />
    );
  }
}
