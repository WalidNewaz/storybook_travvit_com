import type { User, UserType, clickHandler } from '../../../types';
import type { MenuItemsType } from '../Header.interface';

interface MobileMenu {
  user: User<UserType> | undefined;
  menuItems: MenuItemsType;
  handleMenuToggle: clickHandler;
}

export default MobileMenu;
