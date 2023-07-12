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

export interface ImageSource extends Record<string, any> {
  type: string;
  srcSet: string;
  sizes?: string;
  media?: string;
  height?: string;
  width?: string;
}

export interface ResponsiveImageProps extends Record<string, any> {
  sources: ImageSource[];
  alt: string;
  src: string;
}

export interface PlaceCardType {
  id: string;
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  badges: Array<string>;
  name: string;
  slug: string;
  location: string;
  locationSlug: string;
  rating: string | number;
}
