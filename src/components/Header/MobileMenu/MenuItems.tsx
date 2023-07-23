import React from 'react';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { MenuItem } from '../../Menu/MenuItem/MenuItem';

export const MenuItems: React.FC<{
  items: MenuItemType[];
  className?: string;
}> = ({ items, className = '' }) => (
  <div className={className}>
    {items.map((item, index) => (
      <MenuItem
        key={index}
        icon={item.icon}
        label={item.label}
        href={item.href}
        onClick={item.onClick}
        mobile
      />
    ))}
  </div>
);

export default MenuItems;
