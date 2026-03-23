import React from 'react';

export default function Square({ children }: { children: React.ReactNode }) {
  return (
    <div className="square">
      <div className="square__inner">{children}</div>
    </div>
  );
}
