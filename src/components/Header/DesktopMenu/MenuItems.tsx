import React from 'react';
import { MenuItem } from '../../Menu/MenuItem/MenuItem';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';

const MenuItems: React.FC<{ items: MenuItemType[] }> = ({ items }) => (
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4 font-semibold">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
    </div>
  </div>
);

export default MenuItems;
