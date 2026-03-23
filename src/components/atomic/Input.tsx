import React from 'react';

interface InputProps {
  label?: string;
  field: React.ReactElement;
}

export default function Input({ label, field }: InputProps) {
  return (
    <div className="input">
      <div className="input__label">{label}</div>
      <div className="input__field">{field}</div>
    </div>
  );
}
