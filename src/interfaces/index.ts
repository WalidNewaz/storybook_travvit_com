import type { IconType } from 'react-icons';
import type { clickHandler } from '../types/eventHandler.types';

export interface User<T extends string> {
  id: number;
  username: string;
  email: string;
  role: T;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IconProps {
  className?: string;
  'aria-hidden'?: string;
}

export interface MenuItemType {
  icon: IconType;
  label: string;
  href?: string;
  mobile?: boolean;
  onClick?: clickHandler;
  iconLabel?: string;
}
