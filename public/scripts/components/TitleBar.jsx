import React from 'react';
import men from 'imgs/men.png';

export default class extends React.Component {
  render() {
    return (
      <div className="titlebar">
        <div className="titlebar__text">
          öffnungszeiten: 09:00 - 17:00
        </div>
        <img className="titlebar__img" src={men} />
      </div>
    );
  }
}
