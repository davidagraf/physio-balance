import React from 'react';

export default class Li extends React.Component {
  render() {
    return (
      <li className="li"><div className="li__bullet" /><div className="li__content">{this.props.children}</div></li>
    );
  }
}

Li.propTypes = {
  children: React.PropTypes.node.isRequired
};
