import React from 'react';
import { MenuItem } from '../Menu/MenuItem/MenuItem';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';

const MENU_WRAPPER_CLASSNAME = `
  w-screen max-w-md flex-auto
  overflow-hidden rounded-2xl
  bg-white
  leading-6
  shadow-lg
  ring-1 ring-gray-900/5`;
const MENU_PADDING_CLASSNAME = 'p-4 font-semibold';

const MenuItems: React.FC<{
  items: MenuItemType[];
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ items, setIsShowing }) => (
  <div className={MENU_WRAPPER_CLASSNAME}>
    <div className={MENU_PADDING_CLASSNAME}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            item.onClick && item.onClick(item.id);
            setIsShowing((isShowing) => !isShowing);
          }}
        />
      ))}
    </div>
  </div>
);

export default MenuItems;
