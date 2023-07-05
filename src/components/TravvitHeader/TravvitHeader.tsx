import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { Avatar } from '../Avatar/Avatar';
import { IconButton } from '../IconButton/IconButton';
import { FaPersonHiking } from 'react-icons/fa6';
import { PiMountainsDuotone } from 'react-icons/pi';
import { BiTrip } from 'react-icons/bi';
import { MdPersonPin } from 'react-icons/md';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  UserCircleIcon,
  AdjustmentsVerticalIcon,
  ArrowLeftOnRectangleIcon,
  MapIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

/** Assets */
import face1 from '../../stories/images/img_7.jpeg';

type User = {
  name?: string;
};

const DiscoverMenu: React.FC = () => (
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4 font-semibold">
      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <PiMountainsDuotone
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          Places
          <span className="absolute inset-0" />
        </a>
      </div>
      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <FaPersonHiking
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          Activities
          <span className="absolute inset-0" />
        </a>
      </div>
      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <BiTrip
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          Trips
          <span className="absolute inset-0" />
        </a>
      </div>
      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <MdPersonPin
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          Explorers
          <span className="absolute inset-0" />
        </a>
      </div>
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
        <ChevronDownIcon className="h-5 w-5 ml-2" aria-hidden="true" />
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

const UserMenu: React.FC<{ user?: User; onLogout?: () => void }> = ({
  user,
  onLogout,
}) => (
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4 font-semibold">
      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <UserCircleIcon
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          My Profile
          <span className="absolute inset-0" />
        </a>
      </div>

      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <MapIcon
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          My Trips
          <span className="absolute inset-0" />
        </a>
      </div>

      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <CalendarDaysIcon
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          My Calendar
          <span className="absolute inset-0" />
        </a>
      </div>

      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <AdjustmentsVerticalIcon
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          Settings
          <span className="absolute inset-0" />
        </a>
      </div>

      <div className="p-4 group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <ArrowRightOnRectangleIcon
            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <a
          href="#"
          className="font-semibold text-gray-900 hover:text-travvit-blue self-center"
        >
          Sign Out
          <span className="absolute inset-0" />
        </a>
      </div>
    </div>
  </div>
);

const UserPopoverMenu: React.FC<{ user: User }> = ({ user }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className="relative float-left -mt-1 ml-8">
      <Popover.Button
        className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        <Avatar size="xs" src={face1} />
        {/* <span>Discover</span>
        <ChevronDownIcon className="h-5 w-5 ml-2" aria-hidden="true" /> */}
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

const LoginUser: React.FC<{ user: User; onLogin: () => void }> = ({ user }) => {
  if (user) {
    return <UserPopoverMenu user={user} />;
  } else {
    return (
      <a href="#" className="ml-8 first:ml-0 main-menu-item-link">
        Log in{' '}
        <span aria-hidden="true">
          <ArrowLeftOnRectangleIcon className="icon inline ml-2" />
        </span>
      </a>
    );
  }
};

const SmallScreenUserMenu: React.FC<{
  user?: User;
  onLogout?: () => void;
}> = ({}) => (
  <div className="border-b pb-8 flex mt-4 flex-col">
    <a
      href="#"
      className="main-menu-item-link !text-slate-300 py-6 inline-block w-full"
    >
      <span aria-hidden="true">
        <UserCircleIcon className="inline !text-slate-300 mr-6 w-6 h-6" />
      </span>
      My Profile
    </a>
    <a
      href="#"
      className="main-menu-item-link !text-slate-300 py-6 inline-block w-full"
    >
      <span aria-hidden="true">
        <MapIcon className="inline !text-slate-300 mr-6 w-6 h-6" />
      </span>
      My Trips
    </a>
    <a
      href="#"
      className="main-menu-item-link !text-slate-300 py-6 inline-block w-full"
    >
      <span aria-hidden="true">
        <CalendarDaysIcon className="inline !text-slate-300 mr-6 w-6 h-6" />
      </span>
      My Calendar
    </a>
    <a
      href="#"
      className="main-menu-item-link !text-slate-300 py-6 inline-block w-full"
    >
      <span aria-hidden="true">
        <AdjustmentsVerticalIcon className="inline !text-slate-300 mr-6 w-6 h-6" />
      </span>
      Settings
    </a>
    <a
      href="#"
      className="main-menu-item-link !text-slate-300 py-6 inline-block w-full"
    >
      <span aria-hidden="true">
        <ArrowRightOnRectangleIcon className="inline !text-slate-300 mr-6 w-6 h-6" />
      </span>
      Log Out
    </a>
  </div>
);

const SmallScreenLoginUser: React.FC<{ user: User; onLogin?: () => void }> = ({
  user,
  onLogin,
}) => {
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
            <ArrowLeftOnRectangleIcon className="inline !text-slate-300 mr-6 w-6 h-6" />
          }
        />
      </div>
    );
  }
};

const SmallScreenMenu: React.FC<{
  user: User;
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
          <XMarkIcon className="icon !text-slate-300" />
        </button>
      </div>
      <nav className="flex flex-col space-y-4">
        <SmallScreenLoginUser user={user} />
        <div className="flex !mt-12">
          <span aria-hidden="true">
            <GlobeAltIcon className="w-6 h-6 inline !text-slate-300 mr-6" />
          </span>
          <h3 className="font-bold text-travvit-orange inline">Discover</h3>
        </div>
        <a href="#" className="main-menu-item-link !text-slate-300 py-4 pl-12">
          Places
        </a>
        <a href="#" className="main-menu-item-link !text-slate-300 py-4 pl-12">
          Activities
        </a>
        <a href="#" className="main-menu-item-link !text-slate-300 py-4 pl-12">
          Trips
        </a>
        <a href="#" className="main-menu-item-link !text-slate-300 py-4 pl-12">
          Explorers
        </a>
      </nav>
    </div>
  </div>
);

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const TravvitHeader: React.FC<HeaderProps> = ({
  user = {},
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
              <XMarkIcon className="icon mr-1" />
            ) : (
              <Bars3Icon className="icon !text-slate-900" />
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
