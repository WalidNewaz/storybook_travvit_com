import React from 'react';
import { FaHeart } from 'react-icons/fa6';
import ActionIconProps from '../ActionIcon.interface';

const ICON_BASE_CLASSNAME = `
  icon
  stroke-white
  stroke-2
`;

const ICON_NOT_SELECTED_CLASSNAMES = `
  fill-slate-600
  animated-svg
  transition-all
  duration-500
  hover:transform
  hover:scale-125
  hover:fill-red-500
`;

const ICON_SELECTED_CLASSNAMES = `
  fill-red-500
  animated-svg
  transition-all
  duration-500
  hover:transform
  hover:scale-125
  hover:fill-slate-600
`;

const BookmarkActionIcon: React.FC<ActionIconProps> = ({
  label,
  onClick,
  selected,
  className,
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="bg-slate-50 rounded-full m-2"
    data-testid={`button-element-${label.replace(/\s/g, '')}`}
  >
    <FaHeart
      className={`${ICON_BASE_CLASSNAME} ${className} ${
        selected ? ICON_SELECTED_CLASSNAMES : ICON_NOT_SELECTED_CLASSNAMES
      }`}
      data-testid={`icon-element-${label.replace(/\s/g, '')}`}
    />
  </button>
);

export default BookmarkActionIcon;
