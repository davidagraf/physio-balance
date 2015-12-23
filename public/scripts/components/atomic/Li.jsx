import React from 'react';

export default class extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }
  render() {
    return (
      <li className="li"><div className="li__bullet" /><div className="li__content">{this.props.children}</div></li>
    );
  }
}
