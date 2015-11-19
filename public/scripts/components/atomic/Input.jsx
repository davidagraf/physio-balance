import React from 'react';

export default class extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    field: React.PropTypes.element.isRequired
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
