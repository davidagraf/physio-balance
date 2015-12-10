import React from 'react';

import sypoba from 'imgs/14_Logo_Sypoba_Fricktal.png';

export default class extends React.Component {
  render() {
    return (
      <div className="sponsors">
        <div className="sponsors__inner">
          <img src={sypoba} />
        </div>
      </div>
    );
  }
}
