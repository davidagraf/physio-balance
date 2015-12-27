import React from 'react';

export default class extends React.Component {
  static propTypes = {
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.arrayOf(React.PropTypes.string)
    ]).isRequired
  }
  render() {
    let iconValues = this.props.name;
    if (!Array.isArray(iconValues)) {
      iconValues = [iconValues];
    }

    let classes = iconValues.map((value) => {
      return 'fa-' + value;
    }).join(' ');

    return (
      <i className={'fa ' + classes}></i>
    );
  }
}
