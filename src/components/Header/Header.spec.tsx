import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { Header } from './Header';
import { BiTrip } from 'react-icons/bi';
import type { UserType } from '../../types';

describe('Header', () => {
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

  afterEach(() => {
    // Reset window.innerWidth to its default value
    window.innerWidth = window.innerWidth;
  });

  test('should render site header with logged in user', async () => {
    // Set window.innerWidth to a large desktop screen width
    window.innerWidth = 1440;
    const { getByText, queryByTestId, getByLabelText } = render(
      <Header user={user} menuItems={menuItems} />,
    );

    // Assert that the site header logo is rendered
    const siteHeaderLogo = getByText('Travvit');
    expect(siteHeaderLogo).toBeInTheDocument();

    // Assert that the user menu button is rendered
    const userBtn = queryByTestId('user-button');
    expect(userBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(userBtn as Element);
    });

    await waitFor(() => {
      // Assert that the desktop menu is rendered
      const desktopMenu = getByText('Profile');
      expect(desktopMenu).toBeInTheDocument();
      // Assert that the mobile menu is not initially rendered
      const mobileMenu = queryByTestId('mobile-menu');
      expect(mobileMenu).not.toBeInTheDocument();
    });
  });

  test('should render site header without logged in user', () => {
    const { getByText, queryByTestId, getByLabelText } = render(
      <Header user={undefined} menuItems={menuItems} />,
    );

    // Assert that the site header logo is rendered
    const siteHeaderLogo = getByText('Travvit');
    expect(siteHeaderLogo).toBeInTheDocument();

    // Assert that the hamburger menu is rendered
    const hamburgerMenu = getByLabelText('Toggle menu');
    expect(hamburgerMenu).toBeInTheDocument();

    // Assert that the desktop menu is rendered
    const desktopMenu = getByText('Log In');
    expect(desktopMenu).toBeInTheDocument();

    // Assert that the mobile menu is not initially rendered
    const mobileMenu = queryByTestId('mobile-menu');
    expect(mobileMenu).not.toBeInTheDocument();
  });

  test('should toggle mobile menu when hamburger menu is clicked', async () => {
    const { queryByTestId, getByLabelText } = render(
      <Header user={user} menuItems={menuItems} />,
    );

    // Click on the hamburger menu
    const hamburgerMenu = getByLabelText('Toggle menu');
    act(() => {
      fireEvent.click(hamburgerMenu);
    });

    let mobileMenu: Element;
    await waitFor(() => {
      // Assert that the mobile menu is rendered
      mobileMenu = queryByTestId('mobile-menu') as Element;
      expect(mobileMenu).toBeInTheDocument();
    });

    // Click on the hamburger menu again to close the mobile menu
    act(() => {
      fireEvent.click(hamburgerMenu);
    });

    await waitFor(() => {
      // Assert that the mobile menu is not rendered
      expect(mobileMenu).not.toBeInTheDocument();
    });
  });
});
