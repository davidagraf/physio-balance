import React from 'react';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
  render() {
    let iconValues = this.props.name;
    if (!Array.isArray(iconValues)) {
      iconValues = [iconValues];
    }

    let classes = iconValues.map((value) => {
      return 'fa-' + value;
    }).join(' ');

    return (
      <i className={'fa ' + classes} />
    );
  }
}

Icon.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
};
