import React from 'react';
import { MenuItemType, IconProps } from './Header';
import { IconButton } from '../IconButton/IconButton';

export const MobileLoginButton: React.FC<MenuItemType> = ({
  icon,
  label,
  onClick,
  iconLabel = 'Log In',
}) => {
  const Icon = icon as unknown as React.ComponentType<IconProps>;

  return (
    <div className="border-b pb-8 flex mt-4 flex-col">
      <IconButton
        primary
        className="flex w-fit self-center mb-9"
        label={label}
        onClick={onClick}
        icon={
          <Icon
            aria-label={iconLabel}
            className="inline w-6 h-6 text-gray-300 group-hover:text-indigo-600"
          />
        }
      />
    </div>
  );
};