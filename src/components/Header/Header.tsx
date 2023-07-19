import React, { useState } from 'react';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { HamburgerMenu } from './HamburgerMenu';
import { User, MenuItemType } from '../../interfaces';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';
import { MobileMenu } from './MobileMenu';
import HeaderProps from './Header.interface';

const SiteHeaderLogo: React.FC = () => (
  <a href="#" className="inline-flex">
    <TravvitLogo size="xs" />
    <h1 className="pl-1 text-travvit-blue">Travvit</h1>
  </a>
);

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
      <nav className="flex justify-between pl-4 pr-0">
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
