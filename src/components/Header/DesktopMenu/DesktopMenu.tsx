import React from 'react';
import DesktopMenuProps from './DesktopMenu.interface';
import DesktopMenuDiscover from './DesktopMenuDiscover';
import DesktopMenuUser from './DesktopMenuUser';

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
      loggedInMenuItems={menuItems.loggedIn}
      notLoggedInMenuItems={menuItems.notLoggedIn}
    />
  </div>
);

export default DesktopMenu;
