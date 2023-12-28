import React from 'react';

import { UserConnectionListItem, UserConnection } from '../ListItems/';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list item for a user's connections.
 * This includes followers, following, and blocked.
 */
const UserConnectionList: React.FC<{
  items: Partial<UserConnection>[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const ConnectionList = withStackedList(UserConnectionListItem, menuItems);

  return <ConnectionList items={items} />;
};

export default UserConnectionList;
