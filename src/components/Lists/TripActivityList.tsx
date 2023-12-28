import React from 'react';

import { TripActivityListItem, TripActivitySummary } from '../ListItems';
import MenuItemType from '../Menu/MenuItem/MenuItem.interface';
import withStackedList from './hocs/withStackedList';

/**
 * A list item for a trip activity.
 */
const TripActivityList: React.FC<{
  items: Partial<TripActivitySummary>[];
  menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[];
}> = ({ items, menuItems }) => {
  const ActivityList = withStackedList(TripActivityListItem, menuItems);

  return <ActivityList items={items} />;
};

export default TripActivityList;
