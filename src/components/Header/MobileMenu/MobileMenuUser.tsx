import React from 'react';
import type { User, UserType } from '../../../types';
import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';
import MobileMenuItems from './MenuItems';
import { MobileLoginButton } from '../MobileLoginButton/MobileLoginButton';

const MobileMenuUser: React.FC<{
  user: User<UserType> | undefined;
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

export default MobileMenuUser;
