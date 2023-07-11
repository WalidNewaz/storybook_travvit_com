import React from 'react';
import { IconProps } from '../../interfaces';
import type { IconType } from 'react-icons';
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

export const ActionIcon: React.FC<{
  icon: IconType;
  label: string;
  onClick: clickHandler;
  className?: string;
}> = ({ icon, label, onClick, className }) => {
  const Icon = icon as unknown as React.ComponentType<IconProps>;

  return (
    <button onClick={onClick} aria-label={label}>
      <Icon className={`${ICON_CLASSNAMES} ${className}`} />
    </button>
  );
};
