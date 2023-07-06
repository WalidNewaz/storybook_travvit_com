import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import type { IconType } from 'react-icons';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { Avatar } from '../Avatar/Avatar';
import { MenuItem } from './MenuItem';
import { HamburgerMenu } from './HamburgerMenu';
import { LoginButton } from './LoginButton';
import { MobileLoginButton } from './MobileLoginButton';
import { FaXmark, FaChevronDown } from 'react-icons/fa6';

interface User<T extends string> {
  id: number;
  username: string;
  email: string;
  role: T;
  firstName: string;
  lastName: string;
  avatar: string;
}

const MenuItems: React.FC<{ items: MenuItemType[] }> = ({ items }) => (
  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-2xl bg-white leading-6 shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4 font-semibold">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
    </div>
  </div>
);

const DesktopMenuDiscover: React.FC<{ items: MenuItemType[] }> = ({
  items,
}) => {
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
        <MenuItems items={items} />
      </Popover.Panel>
    </Popover>
  );
};

const DesktopMenuUserPopover: React.FC<{
  user: User<'admin' | 'user'>;
  items: MenuItemType[];
}> = ({ user, items }) => {
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
        <MenuItems items={items} />
      </Popover.Panel>
    </Popover>
  );
};

/**
 * Returns either a login button, or popove menu with items for a logged in user.
 */
const DesktopMenuUser: React.FC<{
  user?: User<'admin' | 'user'> | null;
  loggedInMenuItems: MenuItemType[];
  notLoggedInMenuItems: MenuItemType[];
}> = ({ user, loggedInMenuItems, notLoggedInMenuItems }) => {
  if (user) {
    return <DesktopMenuUserPopover user={user} items={loggedInMenuItems} />;
  } else {
    return <LoginButton {...notLoggedInMenuItems[0]} />;
  }
};

const MobileMenuItems: React.FC<{
  items: MenuItemType[];
  className?: string;
}> = ({ items, className = '' }) => (
  <div className={className}>
    {items.map((item, index) => (
      <MenuItem
        key={index}
        icon={item.icon}
        label={item.label}
        href={item.href}
        onClick={item.onClick}
        mobile
      />
    ))}
  </div>
);

const MobileMenuUser: React.FC<{
  user: User<'admin' | 'user'> | null;
  loggedInMenuItems: MenuItemType[];
  notLoggedInMenuItems: MenuItemType[];
}> = ({ user, loggedInMenuItems, notLoggedInMenuItems }) => {
  if (user) {
    return (
      <MobileMenuItems
        items={loggedInMenuItems}
        className="border-b pb-8 flex mt-4 flex-col"
      />
    );
  } else {
    return <MobileLoginButton {...notLoggedInMenuItems[0]} />;
  }
};

const MobileMenuSiteLogo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div id="logo-close" className="mb-8 flex justify-between">
    <TravvitLogo size="xs" />
    <button className="top-2 right-2 text-slate-200" onClick={onClick}>
      <FaXmark className="icon !text-slate-300" />
    </button>
  </div>
);

const MobileMenu: React.FC<{
  user: User<'admin' | 'user'> | null;
  menuItems: MenuItemsType;
  handleMenuToggle: () => void;
}> = ({ user, menuItems, handleMenuToggle }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-95 flex flex-col pl-8 pr-8 pt-5 z-20">
    <div className="relative pt-4">
      <MobileMenuSiteLogo onClick={handleMenuToggle} />
      <nav className="flex flex-col space-y-4">
        <MobileMenuUser
          user={user}
          loggedInMenuItems={menuItems.loggeIn}
          notLoggedInMenuItems={menuItems.notLoggedIn}
        />
        <MobileMenuItems items={menuItems.discover} />
      </nav>
    </div>
  </div>
);

const SiteHeaderLogo: React.FC = () => (
  <a href="#" className="inline-flex">
    <TravvitLogo size="xs" />
    <h1 className="pl-1 text-travvit-blue">Travvit</h1>
  </a>
);

const DesktopMenu: React.FC<{
  user?: User<'admin' | 'user'> | null;
  menuItems: MenuItemsType;
}> = ({ user, menuItems }) => (
  <div id="main-menu" className="hidden inline-flex md:visible md:block pt-3">
    <DesktopMenuDiscover items={menuItems.discover} />
    <DesktopMenuUser
      user={user}
      loggedInMenuItems={menuItems.loggeIn}
      notLoggedInMenuItems={menuItems.notLoggedIn}
    />
  </div>
);

export interface IconProps {
  className?: string;
  'aria-hidden'?: string;
}
export interface MenuItemType {
  icon: IconType;
  label: string;
  href?: string;
  mobile?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void | undefined;
  iconLabel?: string;
}

export interface MenuItemsType {
  discover: MenuItemType[];
  loggeIn: MenuItemType[];
  notLoggedIn: MenuItemType[];
}

interface HeaderProps {
  user?: User<'admin' | 'user'>;
  menuItems: MenuItemsType;
}

/**
 * This is the main site header.
 *
 * @param user The info of a logged in user.
 * @param menuItems List of items in the menu.
 * @returns A JSX component.
 */
export const Header: React.FC<HeaderProps> = ({ user = null, menuItems }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <header>
      <nav className="flex justify-between pl-8 pr-8">
        <SiteHeaderLogo />
        <HamburgerMenu
          isOpen={mobileMenuIsOpen}
          onClick={handleMobileMenuToggle}
        />
        <DesktopMenu user={user} menuItems={menuItems} />
        {mobileMenuIsOpen && (
          <MobileMenu
            user={user}
            menuItems={menuItems}
            handleMenuToggle={handleMobileMenuToggle}
          />
        )}
      </nav>
    </header>
  );
};
