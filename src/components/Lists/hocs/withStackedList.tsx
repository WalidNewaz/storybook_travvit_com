import React from 'react';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';

/**
 * This is a Higher Order Component (HOC) that takes a component and returns
 * a new component that renders a list of the component passed in.
 * @param WrappedComponent
 * @returns
 */
const withStackedList = <P extends object>(
  WrappedComponent: React.FC<P>,
  menuItems?: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[],
) => {
  const ExtendingComponent: React.FC<{ items: Partial<P>[] }> = ({
    items,
    ...props
  }) => {
    const renderItems = () =>
      items.map((item: any, index: number) => (
        <li key={item.id} className="flex justify-between gap-x-6 py-5">
          <WrappedComponent key={index} {...item} menuItems={menuItems} />
        </li>
      ));

    return (
      <ul role="list" className="divide-y divide-gray-100 w-full">
        {renderItems()}
      </ul>
    );
  };

  return ExtendingComponent;
};

export default withStackedList;
