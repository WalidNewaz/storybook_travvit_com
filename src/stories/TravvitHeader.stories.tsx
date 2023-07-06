import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import {
  handleLogin,
  handleLogout,
} from '../components/TravvitHeader/mocks/menuFunctions';
import { FaPersonHiking } from 'react-icons/fa6';
import { PiMountainsDuotone } from 'react-icons/pi';
import { BiTrip } from 'react-icons/bi';
import { MdPersonPin } from 'react-icons/md';
import {
  HiUserCircle,
  HiOutlineMap,
  HiMiniCalendarDays,
  HiAdjustmentsVertical,
  HiArrowRightOnRectangle,
  HiArrowLeftOnRectangle,
} from 'react-icons/hi2';

/** Assets */
import face1 from './images/img_7.jpeg';

export default {
  title: 'Components/TravvitHeader',
  component: TravvitHeader,
  decorators: [(story) => <div className="p-1">{story()}</div>],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TravvitHeader>;

export const menuItems = {
  discover: [
    {
      icon: PiMountainsDuotone,
      label: 'Places',
      href: '#',
    },
    {
      icon: FaPersonHiking,
      label: 'Activities',
      href: '#',
    },
    {
      icon: BiTrip,
      label: 'Trips',
      href: '#',
    },
    {
      icon: MdPersonPin,
      label: 'Explorers',
      href: '#',
    },
  ],
  loggeIn: [
    {
      icon: HiUserCircle,
      label: 'My Profile',
      href: '#',
    },
    {
      icon: HiOutlineMap,
      label: 'My Trips',
      href: '#',
    },
    {
      icon: HiMiniCalendarDays,
      label: 'My Calendar',
      href: '#',
    },
    {
      icon: HiAdjustmentsVertical,
      label: 'Settings',
      href: '#',
    },
    {
      icon: HiArrowRightOnRectangle,
      label: 'Log Out',
      href: '#',
      onClick: handleLogout,
    },
  ],
  notLoggedIn: [
    {
      icon: HiArrowLeftOnRectangle,
      label: 'Log In',
      href: '#',
      onClick: handleLogin,
    },
  ],
};

export const LoggedIn: Story = {
  args: {
    user: {
      id: 1,
      username: 'JaneDoe',
      email: 'jane@example.com',
      role: 'user',
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: face1 as string,
    },
    menuItems,
  },
};

export const LoggedOut: Story = {
  args: {
    menuItems,
  },
};
