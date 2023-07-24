import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';
import MenuItemsProps from './MenuItems.interface';

const defaultToggleMenu = () => void 0;

const MenuItems: React.FC<MenuItemsProps> = ({
  position = 'bottom-right',
  items,
  menuOpen,
  menuRef,
  toggleMenu = defaultToggleMenu,
}) =>
  menuOpen && (
    <div
      ref={menuRef}
      className={`menu-items fixed z-10 flex flex-col gap-2 bg-white p-2 rounded-md shadow-md ${
        position === 'top-left'
          ? 'top-2 left-2'
          : position === 'top-right'
          ? 'top-2 right-2'
          : position === 'bottom-left'
          ? 'bottom-2 left-2'
          : 'bottom-2 right-2'
      }`}
    >
      {items.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          onClick={(e) => {
            item.onClick && item.onClick(e);
            toggleMenu(e);
          }}
        />
      ))}
    </div>
  );

export default MenuItems;
