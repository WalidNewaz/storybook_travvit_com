import React from 'react';

import { TripBannedUserListItem, BannedUser } from '../ListItems/';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list of users banned from the trip.
 * This includes followers, following, and blocked.
 */
const TripBannedUserList: React.FC<{
  items: Pick<
    BannedUser,
    'id' | 'name' | 'location' | 'imageUrl' | 'bannedOn'
  >[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const BannedList = withStackedList(TripBannedUserListItem, menuItems);

  return <BannedList items={items} />;
};

export default TripBannedUserList;
