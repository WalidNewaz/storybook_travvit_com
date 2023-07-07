import {
  handleLogin,
  handleLogout,
} from '../../components/TravvitHeader/mocks/menuFunctions';
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
