import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import DesktopMenu from './DesktopMenu';
import { BiTrip } from 'react-icons/bi';
import type { UserType } from '../../../types';
import { MenuItemsType } from '../Header.interface';

describe('DesktopMenu', () => {
  const user = {
    id: 1,
    username: 'JaneDoe',
    email: 'jane@example.com',
    role: 'user' as UserType,
    firstName: 'Jane',
    lastName: 'Doe',
    avatar: 'avatar.jpg',
  };
  const menuItems = {
    discover: [
      { icon: BiTrip, label: 'Places', href: '/places' },
      { icon: BiTrip, label: 'Activities', href: '/activities' },
    ],
    loggedIn: [
      { icon: BiTrip, label: 'Profile', href: '/profile' },
      { icon: BiTrip, label: 'Settings', href: '/settings' },
      { icon: BiTrip, label: 'Logout', onClick: jest.fn() },
    ],
    notLoggedIn: [
      { icon: BiTrip, label: 'Log In', href: '/login', onClick: jest.fn() },
    ],
  };

  test('should render DesktopMenuDiscover and DesktopMenuUser components', () => {
    const { getByTestId } = render(
      <DesktopMenu user={user} menuItems={menuItems as MenuItemsType} />,
    );

    const discoverComponent = getByTestId('desktop-menu-discover');
    const userComponent = getByTestId('desktop-menu-user');

    expect(discoverComponent).toBeInTheDocument();
    expect(userComponent).toBeInTheDocument();
  });
});
