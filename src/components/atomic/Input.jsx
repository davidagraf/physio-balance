import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    field: PropTypes.element.isRequired
  }
  render() {
    return (
      <div className="input">
        <div className="input__label">{this.props.label}</div>
        <div className="input__field">{this.props.field}</div>
      </div>
    );
  }
}
