import MenuItemType from '../MenuItem/MenuItem.interface';
import type { clickHandler } from '../../../types';

interface MenuItems {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  items: MenuItemType[];
  menuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  toggleMenu: clickHandler;
}

export default MenuItems;
