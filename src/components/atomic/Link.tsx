import React from 'react';

interface LinkProps {
  icon?: React.ReactElement;
  href: string;
  children: string;
  newWindow?: boolean;
  className?: string;
}

export default function Link({ icon, href, children, newWindow = false, className }: LinkProps) {
  const linkClass = className ? `link ${className}` : 'link';
  
  return (
    <a className={linkClass} href={href || '#'} target={newWindow ? '_blank' : undefined}>
      {icon && <span className="link__icon">{icon}&nbsp;</span>}
      <span className="link__text">{children}</span>
    </a>
  );
}
