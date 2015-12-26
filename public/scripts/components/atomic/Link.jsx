import React from 'react';

export default class extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string,
    href: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <a className="link" href={this.props.href} target="_blank">
        {
          this.props.icon && <span className="link__icon"><i className={'fa fa-' + this.props.icon}></i>&nbsp;</span>
        }
        <span className="link__text">{this.props.children}</span>
      </a>
    );
  }
}
