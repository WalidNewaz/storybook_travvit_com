import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import MenuItems from './MenuItems';
import { BiTrip } from 'react-icons/bi';

describe('MenuItems', () => {
  const items = [
    { icon: BiTrip, label: 'Item 1', href: '/item1' },
    { icon: BiTrip, label: 'Item 2', href: '/item2' },
    { icon: BiTrip, label: 'Item 3', href: '/item3' },
  ];

  test('should render MenuItem components with correct props', () => {
    const { getAllByTestId } = render(
      <MenuItems items={items} className="custom-class" />,
    );

    const menuItemComponents = getAllByTestId('menu-item-href');

    expect(menuItemComponents).toHaveLength(items.length);

    menuItemComponents.forEach((menuItem, index) => {
      const { label, href } = items[index];
      expect(menuItem).toHaveAttribute('href', href);
      expect(menuItem).toHaveTextContent(label);
    });
  });
});
