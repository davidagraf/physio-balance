import React from 'react';
import Icon from 'scripts/components/Icon.jsx';

export default class extends React.Component {
  static propTypes = {
    //img: React.PropTypes.string,
    onClick: React.PropTypes.func
  }
  render() {
    return (
      <button className="button--next" onClick={(ev) => this.props.onClick(ev)}>
        <Icon name="angle-down" />
      </button>
    );
  }
}
