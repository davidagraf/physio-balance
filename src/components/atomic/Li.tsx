import React from 'react';

export default function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="li">
      <div className="li__bullet" />
      <div className="li__content">{children}</div>
    </li>
  );
}
