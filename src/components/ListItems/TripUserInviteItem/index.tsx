import React from 'react';
import TripUserActions from '../ListItemDropdownMenu';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { getMenuItemsWithId } from '../utils';
import StatusBadge from './StatusBadge';

export enum UserInviteStatus {
  CREATED = 'created',
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  CANCELED = 'canceled',
}

// Use a more specific type for 'item' in TripUserListItem
export interface UserInvite {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: UserInviteStatus;
  lastSentAt: Date;
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}

/**
 * A list item for a trip invitation.
 * These are displayed on a stacked list.
 * @param params
 * @returns
 */
const TripUserInviteItem: React.FC<UserInvite> = ({
  id,
  firstName,
  lastName,
  email,
  status,
  lastSentAt,
  menuItems,
}) => {
  return (
    <div className="flex justify-between w-full h-fit p-6">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {`${firstName} ${lastName}`}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {email}
          </p>
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-row">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">
            <StatusBadge status={status} />
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Last sent: {lastSentAt.toLocaleDateString()}
          </p>
        </div>
        <TripUserActions menuItems={getMenuItemsWithId(menuItems, id)} />
      </div>
    </div>
  );
};

export default TripUserInviteItem;
