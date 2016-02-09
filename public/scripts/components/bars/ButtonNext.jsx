import React from 'react';
import Icon from 'scripts/components/atomic/Icon.jsx';

export default class ButtonNext extends React.Component {
  render() {
    const iconName = ( this.props.start ? 'angle-up' : 'angle-down' );

    return (
      <button tabIndex="-1" className="button--next button--white" onClick={(ev) => this.props.onClick(ev)}>
        <Icon name={iconName} />
      </button>
    );
  }
}

ButtonNext.propTypes = {
  onClick: React.PropTypes.func,
  start: React.PropTypes.bool
};

ButtonNext.defaultProps = {
  start: false
};
