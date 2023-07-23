import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuItems from './MenuItems';
import MenuItemType from '../MenuItem/MenuItem.interface';
import { BiTrip } from 'react-icons/bi';

const mockItems: MenuItemType[] = [
  {
    label: 'Item 1',
    icon: BiTrip,
    href: '/item1',
    onClick: jest.fn(),
  },
  { label: 'Item 2', icon: BiTrip, href: '/item2', onClick: jest.fn() },
];

const mockToggleMenu = jest.fn();
const mockMenuRef = React.createRef<HTMLDivElement>();

test('renders MenuItems correctly when menu is open', () => {
  render(
    <MenuItems
      position="bottom-right"
      items={mockItems}
      menuOpen={true}
      menuRef={mockMenuRef}
      toggleMenu={mockToggleMenu}
    />,
  );

  // Check if the menu items are rendered correctly when menuOpen is true
  const menuItems = screen.getAllByRole('button');
  expect(menuItems).toHaveLength(mockItems.length);

  // Check if onClick is called when a menu item is clicked
  fireEvent.click(menuItems[0]);
  expect(mockItems[0].onClick).toHaveBeenCalledTimes(1);
  expect(mockToggleMenu).toHaveBeenCalledTimes(1);
});

test('does not render MenuItems when menu is closed', () => {
  render(
    <MenuItems
      position="bottom-right"
      items={mockItems}
      menuOpen={false}
      menuRef={mockMenuRef}
      toggleMenu={mockToggleMenu}
    />,
  );

  // Check that the menu is not rendered when menuOpen is false
  const menuItems = screen.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
});
