import React from 'react';
import { LuShare2 } from 'react-icons/lu';
import ActionIconProps from '../ActionIcon.interface';

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

const ShareActionIcon: React.FC<ActionIconProps> = ({
  label,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="bg-slate-50 rounded-full m-2"
    data-testid="button-element"
  >
    <LuShare2
      className={`${ICON_CLASSNAMES} ${className}`}
      data-testid="icon-element"
    />
  </button>
);

export default ShareActionIcon;
