import React, { useState } from 'react';
import type { User, UserType } from '../../../types';
import MenuItemType from '../MenuItem/MenuItem.interface';
import { Popover, Transition } from '@headlessui/react';
import { Avatar } from '../../Avatar/Avatar';
import MenuItems from './MenuItems';
import { LoginButton } from '../LoginButton/LoginButton';
import { getAbsolutePath } from '../../../utils';

const IMG_BASE = process.env.IMG_BASE || '';

const DesktopMenuUserPopover: React.FC<{
  user: User<UserType>;
  items: MenuItemType[];
}> = ({ user, items }) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover
      className="relative float-left -mt-1 ml-8"
      data-testid="desktop-menu-user"
    >
      <Popover.Button
        className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        data-testid="user-button"
      >
        <Avatar size="xs" src={getAbsolutePath(IMG_BASE, user.avatar)} />
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
      <Popover.Panel
        className="absolute -left-16 z-10 mt-2 flex w-72 max-w-max -translate-x-1/2 px-4"
        data-testid="user-panel"
      >
        <MenuItems items={items} />
      </Popover.Panel>
    </Popover>
  );
};

/**
 * Returns either a login button, or popove menu with items for a logged in user.
 */
const DesktopMenuUser: React.FC<{
  user: User<UserType> | undefined;
  loggedInMenuItems: MenuItemType[];
  notLoggedInMenuItems: MenuItemType[];
}> = ({ user, loggedInMenuItems, notLoggedInMenuItems }) => {
  if (user) {
    return <DesktopMenuUserPopover user={user} items={loggedInMenuItems} />;
  } else {
    return <LoginButton {...notLoggedInMenuItems[0]} />;
  }
};

export default DesktopMenuUser;
