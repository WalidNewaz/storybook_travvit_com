import React from 'react';
import { FaPlus } from 'react-icons/fa6';
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

const AddActionIcon: React.FC<{
  label: string;
  onClick: clickHandler;
  className?: string;
}> = ({ label, onClick, className }) => (
  <button onClick={onClick} aria-label={label}>
    <FaPlus className={`${ICON_CLASSNAMES} ${className}`} />
  </button>
);

export default AddActionIcon;
