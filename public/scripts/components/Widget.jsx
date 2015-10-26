import React from 'react';
import maxUndMoritz from 'imgs/maxundmoritz.jpg';

export default class extends React.Component {
  render() {
    return (
      <div className="widget">
        <div className="widget__img">
          <img src={maxUndMoritz}/>
        </div>
        <div className="widget__text">
          Hello World
        </div>
      </div>
    );
  }
}
