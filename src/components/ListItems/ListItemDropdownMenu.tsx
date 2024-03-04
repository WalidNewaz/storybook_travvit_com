import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import DropdownMenu from '../DropdownMenu';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';

/**
 * This component renders the actions available for a trip user.
 * @param params
 * @returns
 */
const ListItemDropdownMenu: React.FC<{ menuItems: MenuItemType[] }> = ({
  menuItems,
}) => {
  return (
    <div className="block">
      <DropdownMenu
        items={menuItems}
        label="List Item Actions"
        icon={<HiDotsVertical className="h-6 w-6" />}
      />
    </div>
  );
};

export default ListItemDropdownMenu;
