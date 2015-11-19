import React from 'react';
import Icon from 'scripts/components/atomic/Icon.jsx';

export default class extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func
  }
  render() {
    return (
      <button className="button--next" onClick={(ev) => this.props.onClick(ev)}>
        <Icon name="angle-up" />
      </button>
    );
  }
}
