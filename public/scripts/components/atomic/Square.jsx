import React from 'react';

export default class extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }
  render() {
    return (
      <div className="square"><div className="square__inner">{this.props.children}</div></div>
    );
  }
}
