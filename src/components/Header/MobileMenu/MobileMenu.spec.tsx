import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileMenu } from './MobileMenu';
import type { UserType } from '../../../types';
import { BiTrip } from 'react-icons/bi';

describe('MobileMenu', () => {
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
    loggedIn: [
      // Define your menu items for logged in user
      // Example:
      { icon: BiTrip, label: 'Profile', href: '/profile', onClick: jest.fn() },
      {
        icon: BiTrip,
        label: 'Settings',
        href: '/settings',
        onClick: jest.fn(),
      },
    ],
    notLoggedIn: [
      // Define your menu items for not logged in user
      // Example:
      { icon: BiTrip, label: 'Log In', href: '/login', onClick: jest.fn() },
      {
        icon: BiTrip,
        label: 'Register',
        href: '/register',
        onClick: jest.fn(),
      },
    ],
    discover: [
      // Define your discover menu items
      // Example:
      { icon: BiTrip, label: 'Places', href: '/places', onClick: jest.fn() },
      {
        icon: BiTrip,
        label: 'Activities',
        href: '/activities',
        onClick: jest.fn(),
      },
    ],
  };

  test('should render mobile menu with logged in user', () => {
    const handleMenuToggle = jest.fn();
    const { getByText, getByTestId } = render(
      <MobileMenu
        user={user}
        menuItems={menuItems}
        handleMenuToggle={handleMenuToggle}
      />,
    );

    // Assert that the mobile menu is rendered
    const mobileMenu = getByText('Profile');
    expect(mobileMenu).toBeInTheDocument();

    // Assert that the site logo is rendered
    const siteLogo = getByTestId('travvit-logo');
    expect(siteLogo).toBeInTheDocument();

    // Assert that the user menu items are rendered
    const profileMenuItem = getByText('Profile');
    expect(profileMenuItem).toBeInTheDocument();
    const settingsMenuItem = getByText('Settings');
    expect(settingsMenuItem).toBeInTheDocument();

    // Assert that the discover menu items are rendered
    const placesMenuItem = getByText('Places');
    expect(placesMenuItem).toBeInTheDocument();
    const activitiesMenuItem = getByText('Activities');
    expect(activitiesMenuItem).toBeInTheDocument();
  });

  test('should render mobile menu without logged in user', () => {
    const handleMenuToggle = jest.fn();
    const { getByText, getByTestId } = render(
      <MobileMenu
        user={undefined}
        menuItems={menuItems}
        handleMenuToggle={handleMenuToggle}
      />,
    );

    // Assert that the mobile menu is rendered
    const mobileMenu = getByText('Log In');
    expect(mobileMenu).toBeInTheDocument();

    // Assert that the site logo is rendered
    const siteLogo = getByTestId('travvit-logo');
    expect(siteLogo).toBeInTheDocument();

    // Assert that the login button is rendered
    const loginButton = getByText('Log In');
    expect(loginButton).toBeInTheDocument();

    // Assert that the discover menu items are rendered
    const placesMenuItem = getByText('Places');
    expect(placesMenuItem).toBeInTheDocument();
    const activitiesMenuItem = getByText('Activities');
    expect(activitiesMenuItem).toBeInTheDocument();
  });

  test('should call handleMenuToggle when site logo is clicked', () => {
    const handleMenuToggle = jest.fn();
    const { getByTestId } = render(
      <MobileMenu
        user={user}
        menuItems={menuItems}
        handleMenuToggle={handleMenuToggle}
      />,
    );

    // Click on the site logo
    const siteLogo = getByTestId('mobile-toggle-menu');
    fireEvent.click(siteLogo);

    // Assert that the handleMenuToggle function is called
    expect(handleMenuToggle).toHaveBeenCalledTimes(1);
  });
});
