import React from 'react';
import TripUserActions from '../ListItemDropdownMenu';
import { Avatar } from '../../Avatar/Avatar';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { getMenuItemsWithId } from '../utils';

// Use a more specific type for 'item' in TripUserListItem
export interface WailistedUser {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  waitlistedOn: Date;
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}

/**
 * A list item for a trip waitlist.
 * These are displayed on a stacked list.
 * @param params
 * @returns
 */
const TripWaitlistItem: React.FC<WailistedUser> = ({
  id,
  name,
  location,
  imageUrl,
  waitlistedOn,
  menuItems,
}) => {
  return (
    <div className="flex justify-between w-full h-fit p-6">
      <div className="flex min-w-0 gap-x-4">
        <Avatar src={imageUrl} size="small" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {location}
          </p>
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-row">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
          <p className="text-sm leading-6 text-gray-900">
            Wailisted on: {waitlistedOn.toLocaleDateString()}
          </p>
        </div>
        <TripUserActions menuItems={getMenuItemsWithId(menuItems, id)} />
      </div>
    </div>
  );
};

export default TripWaitlistItem;
