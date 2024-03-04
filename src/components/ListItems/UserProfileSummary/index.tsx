import React from 'react';

import TripUserActions from '../ListItemDropdownMenu';
import { Avatar } from '../../Avatar/Avatar';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import { getMenuItemsWithId } from '../utils';
import Circle from '../../Icons/Circle';
import RoleBadge, { UserRole } from './RoleBadge';
import StatusBadge, { UserStatus } from './StatusBadge';

export interface UserProfileSummary {
  id: string;
  name: string;
  email: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  imageUrl: string;
  location: string;
  createdAt: Date | string;
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}

/**
 * A list item for a user profile.
 * These are displayed on a stacked list.
 */
const UserProfileSummaryItem: React.FC<UserProfileSummary> = ({
  id,
  name,
  email,
  username,
  role,
  status,
  imageUrl,
  location,
  createdAt,
  menuItems,
}) => {
  return (
    <div className="flex justify-between w-full h-fit p-4 sm:p-6">
      <div className="flex min-w-0 gap-x-4">
        <Avatar src={imageUrl} size="small" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900 flex">
            <span className="pr-3">{name}</span>
            <span className="hidden md:flex">
              <Circle className="mt-[0.65rem]" />
              <span className="pr-3">{email}</span>
              <Circle className="mt-[0.65rem]" />
              <span>{username}</span>
            </span>
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {location}
          </p>
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-row">
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end sm:pr-4">
          <p className="text-sm leading-6 text-gray-900">
            <RoleBadge role={role} className="mr-3" />
            <StatusBadge status={status} />
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            {createdAt instanceof Date
              ? createdAt.toLocaleDateString()
              : new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <TripUserActions menuItems={getMenuItemsWithId(menuItems, id)} />
      </div>
    </div>
  );
};

export default UserProfileSummaryItem;
