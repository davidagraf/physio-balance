import React from 'react';
import Icon from 'scripts/components/atomic/Icon.jsx'

export default class extends React.Component {
  render() {
    return (
      <div className="infoicon">
        <Icon name={['spinner', 'spin']} />
      </div>
    );
  }
}
