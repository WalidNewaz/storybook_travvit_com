import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FloatingActionMenu from './FloatingActionMenu';
import { BiTrip } from 'react-icons/bi';

const mockMenuItems = [
  { label: 'Item 1', icon: BiTrip, href: '/item1' },
  { label: 'Item 2', icon: BiTrip, href: '/item2' },
];

test('renders FloatingActionMenu correctly', () => {
  render(
    <FloatingActionMenu
      icon={<span>FAB Icon</span>}
      menuItems={mockMenuItems}
    />,
  );

  // Check if the floating action button is rendered with the correct icon
  const fabButton = screen.getByRole('button');
  expect(fabButton).toBeInTheDocument();
  expect(fabButton).toHaveTextContent('FAB Icon');

  // Check if the menu is initially closed
  const menuItems = screen.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
});

test('opens and closes the menu when clicking the floating action button', () => {
  render(
    <FloatingActionMenu
      icon={<span>FAB Icon</span>}
      menuItems={mockMenuItems}
    />,
  );

  // Open the menu by clicking the floating action button
  const fabButton = screen.getByRole('button');
  fireEvent.click(fabButton);

  // Check if the menu is now open and contains the correct number of items
  const menuItems = screen.getAllByRole('button');
  expect(menuItems).toHaveLength(mockMenuItems.length + 1);

  // Close the menu by clicking the floating action button again
  fireEvent.click(fabButton);

  // Check if the menu is now closed
  const closedMenuItems = screen.queryAllByRole('button');
  expect(closedMenuItems).toHaveLength(1);
});
