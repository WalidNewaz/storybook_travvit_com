import React from 'react';
import { FaPlus } from 'react-icons/fa6';
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

const AddActionIcon: React.FC<ActionIconProps> = ({
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
    <FaPlus
      className={`${ICON_CLASSNAMES} ${className}`}
      data-testid="icon-element"
    />
  </button>
);

export default AddActionIcon;
