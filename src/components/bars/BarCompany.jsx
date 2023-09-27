import React from 'react';
import Bar from './Bar.jsx';
import Icon from '../atomic/Icon.jsx';
import { Link } from 'react-router-dom';
import AtomicLink from '../atomic/Link.jsx';
import {FACEBOOK, INSTAGRAM} from '../../utils/links.js';

import logo from '../../imgs/logo/pb_logo_white_rgb.png';
import wirbelsaeule from '../../imgs/wirbelsaeule.png';

const MAIL = 'team@physiobalance.fit';
const PHONE = '+41 62 871 16 20';
const ADDRESS = 'widengasse 16 5070 frick';

export default class extends React.Component {
  render() {
    return (
      <Bar
        title={<Link to="/"><img src={logo}/></Link>}
        img={<img className="bar__img--company" src={wirbelsaeule} />}
        subtitle="&laquo;das gesundheitszentrum für prävention und rehabilitation&raquo;"
        infos={[
          <div><Link className="link bar__link" to="/contact">
            <Icon name="map-marker"/> <span className="link__text">{ADDRESS}</span>
          </Link></div>,
          <div><Icon name="phone"/> {PHONE}</div>,
          <div><Icon name="envelope"/> {MAIL}</div>,
          <div><AtomicLink className="bar__link"
            href={FACEBOOK}
            newWindow={true}
            icon={<Icon name="facebook-official"/>}>
            physiobalance.fit
          </AtomicLink></div>,
          <div><AtomicLink className="bar__link"
            href={INSTAGRAM}
            newWindow={true}
            icon={<Icon name="instagram"/>}>
            physiobalance.fit
          </AtomicLink></div>
        ]}
      />
    );
  }
}
