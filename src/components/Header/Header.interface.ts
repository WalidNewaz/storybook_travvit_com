import type { User, UserType, MenuItem } from '../../types';

export interface MenuItemsType {
  discover: MenuItem[];
  loggedIn: MenuItem[];
  notLoggedIn: MenuItem[];
}

interface Header {
  user?: User<UserType> | undefined;
  menuItems: MenuItemsType;
}

export default Header;
