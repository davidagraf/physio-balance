import React from 'react';

import Widget from './Widget.jsx';

import formular from '../../imgs/widgets/form.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={formular}
        text={'leistungsabrechnung'} path="/physioinfos" />
    );
  }
}
