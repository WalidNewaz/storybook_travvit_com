import React from 'react';

import { UserProfileSummaryItem, UserProfileSummary } from '../ListItems/';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list item for a user's profile.
 */
const UserProfileList: React.FC<{
  items: Partial<UserProfileSummary>[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const ProfileList = withStackedList(UserProfileSummaryItem, menuItems);

  return <ProfileList items={items} />;
};

export default UserProfileList;
