import React from 'react';
import Bar from 'scripts/components/bars/Bar.jsx';
import Icon from 'scripts/components/Icon.jsx';

import men from 'imgs/men.png';

export default class extends React.Component {
  render() {
    return (
      <Bar img={men} text={
        <div>
          <Icon name="clock-o"/> Mo - Fr 09:00 - 17:00<br/>
          <Icon name="phone"/> 061 123 45 67
        </div>
      } />
    );
  }
}
