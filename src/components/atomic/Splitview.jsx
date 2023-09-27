import React from 'react';
import PropTypes from 'prop-types';

export default class Splitview extends React.Component {
  render() {
    return (
      <div className="splitview">
        <div className="splitview__left">{this.props.left}</div>
        <div className="splitview__right">{this.props.right}</div>
      </div>
    );
  }
}

Splitview.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired
};
