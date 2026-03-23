import React from 'react';
import { Link } from 'react-router';

interface WidgetProps {
  img?: string;
  content?: React.ReactNode;
  text?: string;
  path: string;
}

export default function Widget({ img, content, text, path }: WidgetProps) {
  return (
    <div>
      <Link tabIndex={-1} className="widget link" to={path}>
        <div className="widget__img">
          {(img && <img src={img}/>) || (content && content)}
        </div>
        <div className="widget__text">
          <div className="widget__text__content">{text}</div>
        </div>
      </Link>
    </div>
  );
}
