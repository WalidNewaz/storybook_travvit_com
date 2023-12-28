import React from 'react';

import { TripUserListItem, TripUser } from '../ListItems';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list item for a trip participant.
 * @param params
 * @returns
 */
const TripUserList: React.FC<{
  items: Partial<TripUser>[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const UserList = withStackedList(TripUserListItem, menuItems);

  return <UserList items={items} />;
};

export default TripUserList;
