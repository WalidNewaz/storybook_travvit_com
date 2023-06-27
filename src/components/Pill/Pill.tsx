import React from 'react';
import '../../../src/tailwind.css';

interface PillProps {
  label: string;
  color?: string;
}

export const Pill: React.FC<PillProps> = ({ label, color }: PillProps) => {
  return (
    <div className="inline-flex rounded-full bg-indigo-500 p-2">{label}</div>
  );
};
