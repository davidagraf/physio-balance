import React from 'react';

export default class extends React.Component {
  static propTypes = {
    left: React.PropTypes.node.isRequired,
    right: React.PropTypes.node.isRequired
  }
  render() {
    return (
      <div className="splitview">
        <div className="splitview__left">{this.props.left}</div>
        <div className="splitview__right">{this.props.right}</div>
      </div>
    );
  }
}
