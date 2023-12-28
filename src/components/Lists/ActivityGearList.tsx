import React from 'react';

import { ActivityGearListItem, ActivityGear } from '../ListItems/';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list of gear used for an activity.
 * This includes followers, following, and blocked.
 */
const ActivityGearList: React.FC<{
  items: Pick<
    ActivityGear,
    'id' | 'name' | 'description' | 'imageUrl' | 'quantity' | 'quantityUnit'
  >[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const GearList = withStackedList(ActivityGearListItem, menuItems);

  return <GearList items={items} />;
};

export default ActivityGearList;
