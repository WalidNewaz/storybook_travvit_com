import React from 'react';
import { LuShare2 } from 'react-icons/lu';
import type { clickHandler } from '../../types/eventHandler.types';

const ICON_CLASSNAMES = `
  icon
  text-indigo-600
  animated-svg
  transition-all
  duration-500
  hover:transform
  hover:scale-125
  hover:text-red-500
`;

const ShareActionIcon: React.FC<{
  label: string;
  onClick: clickHandler;
  className?: string;
}> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="bg-slate-50 rounded-full m-2"
  >
    <LuShare2 className={`${ICON_CLASSNAMES} ${className}`} />
  </button>
);

export default ShareActionIcon;