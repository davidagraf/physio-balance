import React from 'react';

interface BarProps {
  img?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  infos?: React.ReactNode[];
}

export default function Bar({ img, title, subtitle, infos }: BarProps) {
  return (
    <div className="bar">
      {img}
      <div className="bar__title">{title}</div>
      {subtitle && <div className="bar__subtitle">{subtitle}</div>}
      {infos && (
        <div className="bar__infos">
          <div className="bar__infos__group">
            {infos.map((info, i) => (
              <div key={i} className="bar__infos__info">
                {info}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
