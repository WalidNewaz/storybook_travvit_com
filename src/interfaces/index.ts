import { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import type { clickHandler } from '../types/eventHandler.types';
import type { MediaType } from '../types';

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

export interface ActivityCardType {
  id: string;
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
  name: string;
  slug: string;
  place: string;
  placeSlug: string;
  createdBy: string;
  createdBySrc: string;
  createdByLink: string;
  rating: string;
  className?: string;
}

export interface ActivitySummaryType {
  id: string;
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  badges: Array<string>;
  name: string;
  slug: string;
  place: {
    id: string;
    name: string;
    slug: string;
  };
  createdBy: {
    id: string;
    name: string;
    avatar: string;
    slug: string;
  };
  rating: string | number;
  className?: string;
}

export interface ImageSource extends Record<string, any> {
  type: string;
  srcSet: string;
  sizes?: string;
  media?: string;
  height?: string;
  width?: string;
}

export interface VideoSource extends Record<string, any> {
  src: string;
  type: string;
}

export interface ResponsiveImageProps extends Record<string, any> {
  sources: ImageSource[];
  alt: string;
  src: string;
}

export interface ResponsiveVideoProps extends Record<string, any> {
  sources: VideoSource[];
  requiredMediaType: string;
  children?: ReactNode;
}

export interface MediaCardProps {
  mediaType: MediaType;
  imageProps?: ResponsiveImageProps;
  videoProps?: ResponsiveVideoProps;
  actionLayer?: ReactNode;
  containerStyle?: React.CSSProperties;
  mediaStyle?: React.CSSProperties;
  className?: string;
}

export interface MediaLayerProps extends Record<string, any> {
  imageProps?: ResponsiveImageProps;
  videoProps?: ResponsiveVideoProps;
  mediaType: MediaType;
}

export interface SlideProps {
  media: string;
  mediaType?: MediaType;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: clickHandler;
  mediaClassName?: string;
  mediaStyle?: React.CSSProperties;
  className?: string;
}

export interface HeroSliderProps {
  slides: Array<SlideProps>;
  containerClasses?: string;
  containerStyle?: React.CSSProperties;
  slideContainerClasses?: string;
  mediaStyle?: React.CSSProperties;
  slideDuration?: number;
}
