import type { User, UserType, MenuItem } from '../../types';

export interface MenuItemsType {
  discover: MenuItem[];
  loggeIn: MenuItem[];
  notLoggedIn: MenuItem[];
}

interface Header {
  user?: User<UserType> | null;
  menuItems: MenuItemsType;
}

export default Header;
