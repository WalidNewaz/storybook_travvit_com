import type { IconType } from 'react-icons';
import type { clickHandler } from '../../../types';

interface MenuItem {
  icon: IconType;
  label: string;
  href?: string;
  mobile?: boolean;
  onClick?: clickHandler;
  iconLabel?: string;
}

export default MenuItem;
