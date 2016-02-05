import React from 'react';

export default class Link extends React.Component {
  render() {
    return (
      <a className="link" href={this.props.href} target={ this.props.newWindow && '_blank'}>
        {
          this.props.icon && <span className="link__icon">{this.props.icon}&nbsp;</span>
        }
        <span className="link__text">{this.props.children}</span>
      </a>
    );
  }
}

Link.propTypes = {
  icon: React.PropTypes.element,
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
  newWindow: React.PropTypes.bool,
};

Link.defaultProps = {
  newWindow: false
};
