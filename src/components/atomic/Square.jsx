import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {
  render() {
    return (
      <div className="square"><div className="square__inner">{this.props.children}</div></div>
    );
  }
}

Square.propTypes = {
  children: PropTypes.node.isRequired,
};
