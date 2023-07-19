import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { User, MenuItemType } from '../../../interfaces';
import { LoginButton } from '../LoginButton/LoginButton';
import { Avatar } from '../../Avatar/Avatar';
import { FaChevronDown } from 'react-icons/fa6';
import { MenuItem } from '../MenuItem/MenuItem';
import DesktopMenuProps from './DesktopMenu.interface';

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

/**
 * Generates the menu when viewed on a large screen device.
 * @param user The currently logged in user.
 * @param menuItems The items on the menu that are displayed.
 * @returns JSX component
 */
export const DesktopMenu: React.FC<DesktopMenuProps> = ({
  user,
  menuItems,
}) => (
  <div className="desktop-menu hidden inline-flex md:visible md:block pt-3">
    <DesktopMenuDiscover items={menuItems.discover} />
    <DesktopMenuUser
      user={user}
      loggedInMenuItems={menuItems.loggeIn}
      notLoggedInMenuItems={menuItems.notLoggedIn}
    />
  </div>
);
