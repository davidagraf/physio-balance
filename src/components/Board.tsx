import React from 'react';

export default function Board({ widgets }: { widgets: React.ReactElement[] }) {
  return (
    <div className="board">
      <div className="board__content">{
        widgets.map(
          (child, index) => <div key={index}>{child}</div>
        )
      }</div>
    </div>
  );
}