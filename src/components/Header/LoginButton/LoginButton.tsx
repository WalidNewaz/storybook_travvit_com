import React from 'react';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { IconProps } from '../../../interfaces';

export const LoginButton: React.FC<MenuItemType> = ({
  icon,
  label,
  href,
  onClick,
  iconLabel = 'Log In',
}) => {
  const Icon = icon as unknown as React.ComponentType<IconProps>;
  return (
    <a
      href={href}
      onClick={onClick}
      className="ml-8 first:ml-0 main-menu-item-link"
    >
      {label + ' '}
      <span aria-hidden="true" data-testid="login-icon">
        <Icon
          aria-label={iconLabel}
          className="inline w-6 h-6 text-gray-600 ml-2"
        />
      </span>
    </a>
  );
};
