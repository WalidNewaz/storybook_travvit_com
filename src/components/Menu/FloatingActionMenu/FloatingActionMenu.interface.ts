import MenuItemType from '../MenuItem/MenuItem.interface';

interface FloatingActionMenu {
  icon: JSX.Element;
  menuItems: MenuItemType[];
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default FloatingActionMenu;
