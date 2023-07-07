import type { IconType } from 'react-icons';

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
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void | undefined;
  iconLabel?: string;
}
