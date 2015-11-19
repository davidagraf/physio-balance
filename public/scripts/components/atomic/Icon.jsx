import React from 'react';

export default class extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <i className={'fa fa-' + this.props.name}></i>
    );
  }
}
