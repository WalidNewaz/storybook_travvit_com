import type { IconType } from 'react-icons';
import type { clickHandler } from './eventHandler.types';

export type MenuItem = {
  icon: IconType;
  label: string;
  href?: string;
  mobile?: boolean;
  onClick?: clickHandler;
  iconLabel?: string;
};
