import React from 'react';

import MenuItemWrapper from './MenuItemWrapper';
import MenuItemIcon from './MenuItemIcon';
import MenuItemLabel from './MenuItemLabel';
import MenuItemProps from './MenuItem.interface';
import type { IconType } from '../../../types';

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  href,
  mobile = false,
  onClick,
  iconLabel = '',
}) => {
  const Icon = icon as unknown as React.ComponentType<IconType>;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <MenuItemWrapper>
      <MenuItemIcon icon={Icon} iconLabel={iconLabel} mobile={mobile} />
      <MenuItemLabel
        label={label}
        href={href}
        mobile={mobile}
        onClick={handleClick}
      />
    </MenuItemWrapper>
  );
};
