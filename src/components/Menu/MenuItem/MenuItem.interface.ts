import type { IconType } from 'react-icons';
import type { menuHandler } from '../../../types';

interface MenuItem {
  id?: string; // optional ID of the menu item
  icon: IconType;
  label: string;
  href?: string;
  mobile?: boolean;
  onClick?: menuHandler;
  iconLabel?: string;
}

export default MenuItem;
