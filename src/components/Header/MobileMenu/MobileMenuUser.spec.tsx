import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import MobileMenuUser from './MobileMenuUser';
import { BiTrip } from 'react-icons/bi';
import type { UserType } from '../../../types';

describe('MobileMenuUser', () => {
  const loggedInMenuItems: MenuItemType[] = [
    // Define your menu items for logged in user
    // Example:
    { icon: BiTrip, label: 'Profile', href: '/profile', onClick: jest.fn() },
    { icon: BiTrip, label: 'Settings', href: '/settings', onClick: jest.fn() },
  ];

  const notLoggedInMenuItems: MenuItemType[] = [
    // Define your menu items for not logged in user
    // Example:
    { icon: BiTrip, label: 'Log In', href: '/login', onClick: jest.fn() },
    { icon: BiTrip, label: 'Register', href: '/register', onClick: jest.fn() },
  ];

  test('should render logged in menu items when user is logged in', () => {
    const user = {
      id: 1,
      username: 'JaneDoe',
      email: 'jane@example.com',
      role: 'user' as UserType,
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: 'avatar.jpg',
    };
    const { getByText, queryByText } = render(
      <MobileMenuUser
        user={user}
        loggedInMenuItems={loggedInMenuItems}
        notLoggedInMenuItems={notLoggedInMenuItems}
      />,
    );

    // Assert that the logged in menu items are rendered
    loggedInMenuItems.forEach((item) => {
      const menuItem = getByText(item.label);
      expect(menuItem).toBeInTheDocument();
    });

    // Assert that the login button is not rendered
    const loginButton = queryByText('Log In');
    expect(loginButton).not.toBeInTheDocument();
  });

  test('should render login button when user is not logged in', () => {
    const { getByText, queryByText } = render(
      <MobileMenuUser
        user={undefined}
        loggedInMenuItems={loggedInMenuItems}
        notLoggedInMenuItems={notLoggedInMenuItems}
      />,
    );

    // Assert that the login button is rendered
    const loginButton = getByText('Log In');
    expect(loginButton).toBeInTheDocument();

    // Assert that the logged in menu items are not rendered
    loggedInMenuItems.forEach((item) => {
      const menuItem = queryByText(item.label);
      expect(menuItem).not.toBeInTheDocument();
    });
  });
});
