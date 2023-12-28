import React from 'react';

const MENU_ITEM_WRAPPER_CLASSNAME = `
  group relative
  flex gap-x-6
  rounded-lg
  p-2
  hover:bg-gray-50
  whitespace-nowrap`;

const MenuItemWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className={MENU_ITEM_WRAPPER_CLASSNAME}>{children}</div>
);

export default MenuItemWrapper;
