import React from 'react';
import { User, MenuItemType } from '../../interfaces';
import { MenuItemsType } from './Header';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { FaXmark } from 'react-icons/fa6';
import { MenuItem } from './MenuItem';
import { MobileLoginButton } from './MobileLoginButton';

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

/**
 * Generates the menu when viewed on a small screen device.
 * @param user The currently logged in user.
 * @param menuItems The items on the menu that are displayed.
 * @param handleMenuToggle Callback method to handle the menu toggle.
 * @returns JSX component
 */
export const MobileMenu: React.FC<{
  user: User<'admin' | 'user'> | null;
  menuItems: MenuItemsType;
  handleMenuToggle: () => void;
}> = ({ user, menuItems, handleMenuToggle }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-95 flex flex-col pl-8 pr-8 pt-5 z-20">
    <div className="relative pt-4">
      <MobileMenuSiteLogo onClick={handleMenuToggle} />
      <nav className="mobile-menu flex flex-col space-y-4">
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
