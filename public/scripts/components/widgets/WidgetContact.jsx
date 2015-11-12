import React from 'react';

import Widget from 'scripts/components/widgets/Widget.jsx';

import contact from 'imgs/contact.jpg';

export default class extends React.Component {
  render() {
    return (
      <Widget
        img={contact} text={'Kontakt'}
        url="https://docs.google.com/forms/d/19Sb_25eql6M0dpNbloSIcD4Q4r0Yp92XNjFlgsqwtJ8" />
    );
  }
}
