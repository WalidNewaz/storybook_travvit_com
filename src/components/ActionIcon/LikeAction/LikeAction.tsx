import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import ActionIconProps from '../ActionIcon.interface';

const ICON_CLASSNAMES = `
  icon
  stroke-white
  stroke-2
  text-indigo-600
  animated-svg
  transition-all
  duration-500
  hover:transform
  hover:scale-125
  hover:text-red-500
`;

const LikeActionIcon: React.FC<ActionIconProps> = ({
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
    <FaHeart
      className={`${ICON_CLASSNAMES} ${className}`}
      data-testid="icon-element"
    />
  </button>
);

export default LikeActionIcon;
