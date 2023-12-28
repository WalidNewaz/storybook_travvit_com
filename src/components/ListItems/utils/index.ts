import MenuItemType from '../../Menu/MenuItem/MenuItem.interface';

/**
 * Appends an id to each menu item
 * @param menuItems
 * @param id
 * @returns
 */
export const getMenuItemsWithId = (menuItems: MenuItemType[], id: string) =>
  menuItems.map((menuItem: MenuItemType) => ({
    ...menuItem,
    id,
  }));
