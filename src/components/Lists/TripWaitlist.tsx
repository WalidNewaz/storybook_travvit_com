import React from 'react';

import { TripWaitlistItem, WailistedUser } from '../ListItems/';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list of users on a trip waitlist.
 * This includes followers, following, and blocked.
 */
const TripWaitlist: React.FC<{
  items: Pick<
    WailistedUser,
    'id' | 'name' | 'location' | 'imageUrl' | 'waitlistedOn'
  >[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const Waitlist = withStackedList(TripWaitlistItem, menuItems);

  return <Waitlist items={items} />;
};

export default TripWaitlist;
