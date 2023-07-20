import React from 'react';
import classNames from 'classnames';
import MobileMenuProps from './MobileMenu.interface';
import MobileMenuItems from './MenuItems';
import MobileMenuSiteLogo from './MobileMenuSiteLogo';
import MobileMenuUser from './MobileMenuUser';

/**
 * Generates the menu when viewed on a small screen device.
 * @param user The currently logged in user.
 * @param menuItems The items on the menu that are displayed.
 * @param handleMenuToggle Callback method to handle the menu toggle.
 * @returns JSX component
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  user,
  menuItems,
  handleMenuToggle,
}) => {
  const menuClass = classNames(
    `mobile-menu flex flex-col space-y-4`,
    user && `logged-in`,
  );
  return (
    <div
      className="mobile-menu-container fixed top-0 left-0 w-screen h-full bg-gray-800 opacity-95 flex flex-col pl-8 pr-8 pt-5 z-20"
      data-testid="mobile-menu"
    >
      <div className="relative pt-4">
        <MobileMenuSiteLogo onClick={handleMenuToggle} />
        <nav className={menuClass}>
          <MobileMenuUser
            user={user}
            loggedInMenuItems={menuItems.loggedIn}
            notLoggedInMenuItems={menuItems.notLoggedIn}
          />
          <MobileMenuItems items={menuItems.discover} />
        </nav>
      </div>
    </div>
  );
};
