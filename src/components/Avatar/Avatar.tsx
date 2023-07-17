import React from 'react';
import classNames from 'classnames';
import AvatarProps from './Avatar.interface';
import type { Size } from '../../types';

const sizeClasses: Record<Size, string> = {
  xs: 'h-8 w-8',
  small: 'h-12 w-12',
  medium: 'h-24 w-24',
  large: 'h-36 w-36',
  xl: 'h-48 w-48',
  '2xl': 'h-64 w-64',
};

const BASE_AVATAR_CLASSES =
  'inline-block rounded-full object-cover ring-2 ring-white dark-img';

/**
 * This component is used to display a single avatar image.
 *
 * @param src - The source URL of the avatar image.
 * @param size - The size of the avatar.
 * @param alt - The alt text for the avatar image.
 * @returns JSX element
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 'small',
  alt = '',
  className = '',
}) => {
  const computedClasses = classNames(
    BASE_AVATAR_CLASSES,
    sizeClasses[size],
    className,
  );

  return <img className={computedClasses} src={src} alt={alt} />;
};
