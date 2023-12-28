import React from 'react';

import { TripUserInviteItem, UserInvite } from '../ListItems/';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list item for a user's connections.
 * This includes followers, following, and blocked.
 */
const TripInviteList: React.FC<{
  items: Pick<
    UserInvite,
    'id' | 'firstName' | 'lastName' | 'email' | 'status' | 'lastSentAt'
  >[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const InviteList = withStackedList(TripUserInviteItem, menuItems);

  return <InviteList items={items} />;
};

export default TripInviteList;
