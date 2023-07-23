import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import MenuItemType from '../MenuItem/MenuItem.interface';

const defaultToggleMenu = () => void 0;

const MenuItems: React.FC<{
  items: MenuItemType[];
  toggleMenu: () => void;
}> = ({ items, toggleMenu = defaultToggleMenu }) =>
  items.map((item, index) => (
    <MenuItem
      key={index}
      icon={item.icon}
      label={item.label}
      href={item.href}
      onClick={(e) => {
        item.onClick && item.onClick(e);
        toggleMenu();
      }}
    />
  ));

export default MenuItems;
