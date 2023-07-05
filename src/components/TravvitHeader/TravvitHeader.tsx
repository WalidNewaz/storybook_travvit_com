import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../IconButton/IconButton';
import { MenuItem } from '../MenuItem/MenuItem';

import { handleLogin, handleLogout } from './mocks/menuFunctions';

import {
  FaPersonHiking,
  FaBars,
  FaXmark,
  FaChevronDown,
} from 'react-icons/fa6';
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

interface User<T extends string> {
  id: number;
  username: string;
  email: string;
  role: T;
  firstName: string;
  lastName: string;
  avatar: string;
}

const menuItems = {
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
      onclick: handleLogout,
    },
  ],
};

const DiscoverMenu: React.FC = () => (
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4 font-semibold">
      {menuItems.discover.map((item) => (
        <MenuItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </div>
  </div>
);

const DiscoverPopoverMenu: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="relative float-left">
      <Popover.Button
        className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        <span>Discover</span>
        <FaChevronDown className="h-5 w-5 ml-2" aria-hidden="true" />
      </Popover.Button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      ></Transition>
      <Popover.Panel className="absolute z-10 mt-5 flex w-64 max-w-max -translate-x-1/2 px-4">
        <DiscoverMenu />
      </Popover.Panel>
    </Popover>
  );
};

const UserMenu: React.FC<{
  user?: User<'admin' | 'user'>;
  onLogout?: () => void;
}> = ({ user, onLogout }) => (
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4 font-semibold">
      {menuItems.loggeIn.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          onClick={item.onclick}
        />
      ))}
    </div>
  </div>
);

const UserPopoverMenu: React.FC<{ user: User<'admin' | 'user'> }> = ({
  user,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="relative float-left -mt-1 ml-8">
      <Popover.Button
        className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        <Avatar size="xs" src={user.avatar} />
      </Popover.Button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      ></Transition>
      <Popover.Panel className="absolute -left-16 z-10 mt-2 flex w-72 max-w-max -translate-x-1/2 px-4">
        <UserMenu />
      </Popover.Panel>
    </Popover>
  );
};

const LoginUser: React.FC<{
  user?: User<'admin' | 'user'> | null;
  onLogin: () => void;
}> = ({ user }) => {
  if (user) {
    return <UserPopoverMenu user={user} />;
  } else {
    return (
      <a href="#" className="ml-8 first:ml-0 main-menu-item-link">
        Log in{' '}
        <span aria-hidden="true">
          <HiArrowLeftOnRectangle className="inline w-6 h-6 text-gray-600 ml-2" />
        </span>
      </a>
    );
  }
};

const SmallScreenUserMenu: React.FC<{
  user?: User<'admin' | 'user'>;
  onLogout?: () => void;
}> = ({}) => (
  <div className="border-b pb-8 flex mt-4 flex-col">
    {menuItems.loggeIn.map((item, index) => (
      <MenuItem
        key={index}
        icon={item.icon}
        label={item.label}
        href={item.href}
        onClick={item.onclick}
        mobile
      />
    ))}
  </div>
);

const SmallScreenLoginUser: React.FC<{
  user: User<'admin' | 'user'> | null;
  onLogin?: () => void;
}> = ({ user, onLogin }) => {
  if (user) {
    return <SmallScreenUserMenu user={user} />;
  } else {
    return (
      <div className="border-b pb-8 flex mt-4 flex-col">
        <IconButton
          primary
          className="flex w-fit self-center mb-9"
          label="Log In"
          icon={
            <HiArrowLeftOnRectangle className="inline w-6 h-6 text-gray-300 group-hover:text-indigo-600" />
          }
        />
      </div>
    );
  }
};

const SmallScreenMenu: React.FC<{
  user: User<'admin' | 'user'> | null;
  handleMenuToggle: () => void;
}> = ({ user, handleMenuToggle }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-95 flex flex-col pl-8 pr-8 pt-5 z-20">
    <div className="relative pt-4">
      <div id="logo-close" className="mb-8 flex justify-between">
        <TravvitLogo size="xs" />
        <button
          className="top-2 right-2 text-slate-200"
          onClick={handleMenuToggle}
        >
          <FaXmark className="icon !text-slate-300" />
        </button>
      </div>
      <nav className="flex flex-col space-y-4">
        <SmallScreenLoginUser user={user} />
        {menuItems.discover.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            mobile
          />
        ))}
      </nav>
    </div>
  </div>
);

interface HeaderProps {
  user?: User<'admin' | 'user'>;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const TravvitHeader: React.FC<HeaderProps> = ({
  user = null,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="flex justify-between pl-8 pr-8">
        <a href="#" className="inline-flex">
          <TravvitLogo size="xs" />
          <h1 className="pl-1 text-travvit-blue">Travvit</h1>
        </a>
        <div id="ham-menu" className="flex visible md:hidden">
          <button className="p-2" onClick={handleMenuToggle}>
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden clip-none whitespace-nowrap border-0">
              Open main menu
            </span>
            {menuOpen ? (
              <FaXmark className="icon mr-1" />
            ) : (
              <FaBars className="icon !text-slate-900" />
            )}
          </button>
        </div>
        <div
          id="main-menu"
          className="hidden inline-flex md:visible md:block pt-3"
        >
          <DiscoverPopoverMenu />
          <LoginUser user={user} onLogin={onLogin} />
        </div>
        {menuOpen && (
          <SmallScreenMenu user={user} handleMenuToggle={handleMenuToggle} />
        )}
      </nav>
    </header>
  );
};
