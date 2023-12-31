import type { User, UserType } from '../../../types';
import type { MenuItemsType } from '../Header.interface';

interface DesktopMenu {
  user?: User<UserType> | undefined;
  menuItems: MenuItemsType;
}

export default DesktopMenu;
