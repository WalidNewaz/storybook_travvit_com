import React from 'react';
import Actions from '../ListItemDropdownMenu';
import { Avatar } from '../../Avatar/Avatar';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { getMenuItemsWithId } from '../utils';

export interface UserConnection {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}

/**
 * A list item of a user's followers.
 * @param params
 * @returns
 */
const UserConnectionListItem: React.FC<UserConnection> = ({
  id,
  name,
  location,
  imageUrl,
  menuItems,
}) => {
  return (
    <div className="flex justify-between w-full h-fit p-6">
      <div className="flex min-w-0 gap-x-4">
        <Avatar src={imageUrl} size="small" />
        <div className="flex flex-col justify-center">
          <div className="text-sm font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
      </div>
      <Actions menuItems={getMenuItemsWithId(menuItems, id)} />
    </div>
  );
};

export default UserConnectionListItem;
