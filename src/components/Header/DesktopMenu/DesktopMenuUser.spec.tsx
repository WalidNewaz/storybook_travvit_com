import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import DesktopMenuUser from './DesktopMenuUser';
import { BiTrip } from 'react-icons/bi';
import type { UserType } from '../../../types';

describe('DesktopMenuUser', () => {
  const loggedInMenuItems = [
    { icon: BiTrip, label: 'Profile', href: '/profile' },
    { icon: BiTrip, label: 'Settings', href: '/settings' },
    { icon: BiTrip, label: 'Logout', onClick: jest.fn() },
  ];

  const notLoggedInMenuItems = [
    { icon: BiTrip, label: 'Log In', href: '/login' },
  ];

  test('should render login button when user is not logged in', () => {
    const { getByText } = render(
      <DesktopMenuUser
        user={undefined}
        loggedInMenuItems={loggedInMenuItems}
        notLoggedInMenuItems={notLoggedInMenuItems}
      />,
    );

    const loginButton = getByText('Log In');
    expect(loginButton).toBeInTheDocument();
  });

  test('should render user popover when user is logged in', async () => {
    const user = {
      id: 1,
      username: 'JaneDoe',
      email: 'jane@example.com',
      role: 'user' as UserType,
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: 'avatar.jpg',
    };
    const { getByTestId } = render(
      <DesktopMenuUser
        user={user}
        loggedInMenuItems={loggedInMenuItems}
        notLoggedInMenuItems={notLoggedInMenuItems}
      />,
    );

    const userButton = getByTestId('user-button');
    act(() => {
      fireEvent.click(userButton);
    });

    await waitFor(() => {
      const userPanel = getByTestId('user-panel');
      expect(userPanel).toBeInTheDocument();
    });
  });

  test.skip('should call logout function when logout item is clicked', async () => {
    const user = {
      id: 1,
      username: 'JaneDoe',
      email: 'jane@example.com',
      role: 'user' as UserType,
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: 'avatar.jpg',
    };
    const { getByTestId } = render(
      <DesktopMenuUser
        user={user}
        loggedInMenuItems={loggedInMenuItems}
        notLoggedInMenuItems={notLoggedInMenuItems}
      />,
    );

    const userButton = getByTestId('user-button');
    act(() => {
      fireEvent.click(userButton);
    });

    let logoutItem: Element;
    await waitFor(() => {
      logoutItem = getByTestId('logout-item');
    });
    act(() => {
      fireEvent.click(logoutItem);
    });

    await waitFor(() => {
      expect(loggedInMenuItems[2].onClick).toHaveBeenCalledTimes(1);
    });
  });
});
