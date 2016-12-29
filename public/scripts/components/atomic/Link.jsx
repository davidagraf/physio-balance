import React from 'react';
import classNames from 'classnames';

export default class Link extends React.Component {
  render() {
    const {icon, href, children, newWindow, className} = this.props;
    const linkClass = classNames(
			'link',
			className
		);
    return (
      <a className={linkClass} href={href || '#'} target={ newWindow && '_blank'}>
        {
          icon && <span className="link__icon">{icon}&nbsp;</span>
        }
        <span className="link__text">{children}</span>
      </a>
    );
  }
}

Link.propTypes = {
  icon: React.PropTypes.element,
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
  newWindow: React.PropTypes.bool,
  className: React.PropTypes.string,
};

Link.defaultProps = {
  newWindow: false
};
