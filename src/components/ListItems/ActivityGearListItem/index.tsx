import React from 'react';
import { pluralize } from 'inflection';
import type { IconType } from 'react-icons';
import { GiSkis } from 'react-icons/gi';

import TripUserActions from '../ListItemDropdownMenu';
import { Avatar } from '../../Avatar/Avatar';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { getMenuItemsWithId } from '../utils';
import { abbreviate } from '../../../utils/string';

// A piece of gear used for an activity.
export interface ActivityGear {
  id: string;
  name: string;
  description: string;
  imageUrl: string | IconType;
  quantity: number;
  quantityUnit: string;
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}

/**
 * A list item for a trip banned list.
 * These are displayed on a stacked list.
 * @param params
 * @returns
 */
const ActivityGearListItem: React.FC<ActivityGear> = ({
  id,
  name,
  description,
  imageUrl,
  quantity,
  quantityUnit,
  menuItems,
}) => {
  return (
    <div className="flex justify-between w-full h-fit px-6">
      <div className="flex min-w-0 gap-x-4">
        {imageUrl && typeof imageUrl === 'string' ? (
          <Avatar src={imageUrl} size="small" />
        ) : (
          <div>
            <GiSkis className="w-8 h-8" />
          </div>
        )}
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {abbreviate(description, 30)}
          </p>
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-row">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
          <p className="text-sm leading-6 text-gray-900">
            {quantity} {quantity > 1 ? pluralize(quantityUnit) : quantityUnit}
          </p>
        </div>
        <TripUserActions menuItems={getMenuItemsWithId(menuItems, id)} />
      </div>
    </div>
  );
};

export default ActivityGearListItem;
