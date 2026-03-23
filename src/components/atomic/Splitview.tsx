import React from 'react';

interface SplitviewProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function Splitview({ left, right }: SplitviewProps) {
  return (
    <div className="splitview">
      <div className="splitview__left">{left}</div>
      <div className="splitview__right">{right}</div>
    </div>
  );
}
