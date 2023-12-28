import React from 'react';

import TripActivityTimeSpan from './TripActivityTimeSpan';
import TripActivityMembers from '../../ContentCard/TripActivityCard/TripActivityMembers';
import TripUserActions from '../ListItemDropdownMenu';
import { Avatar } from '../../Avatar/Avatar';
import AvatarProps from '../../Avatar/Avatar.interface';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { getMenuItemsWithId } from '../utils';

import type { TimeUnit } from '../../../types';

export interface TripActivitySummary {
  id: string;
  activityName: string;
  imageUrl: string;
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
  groupMembers: AvatarProps[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}

/**
 * A list item for a trip activity.
 * These are displayed on a stacked list.
 */
const TripActivityListItem: React.FC<TripActivitySummary> = ({
  id,
  activityName,
  imageUrl,
  startTime,
  duration,
  groupMembers,
  menuItems,
}) => {
  return (
    <div className="flex justify-between w-full h-fit p-4 sm:p-6">
      <div className="flex min-w-0 gap-x-4">
        <Avatar src={imageUrl} size="small" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {activityName}
          </p>
          <TripActivityTimeSpan startTime={startTime} duration={duration} />
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-row">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <TripActivityMembers groupMembers={groupMembers} />
        </div>
        <TripUserActions menuItems={getMenuItemsWithId(menuItems, id)} />
      </div>
    </div>
  );
};

export default TripActivityListItem;
