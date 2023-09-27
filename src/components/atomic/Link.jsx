import React from 'react';
import PropTypes from 'prop-types';
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
  icon: PropTypes.element,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  newWindow: PropTypes.bool,
  className: PropTypes.string,
};

Link.defaultProps = {
  newWindow: false
};
