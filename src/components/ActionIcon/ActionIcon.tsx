import React from 'react';
import { IconProps } from '../../interfaces';
import ActionIconProps from './ActionIcon.interface';

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

export const ActionIcon: React.FC<ActionIconProps> = ({
  icon,
  label,
  onClick,
  className,
}) => {
  const Icon = icon as unknown as React.ComponentType<IconProps>;

  return (
    <button onClick={onClick} aria-label={label}>
      <Icon
        className={`${ICON_CLASSNAMES} ${className}`}
        data-testid="icon-element"
      />
    </button>
  );
};
