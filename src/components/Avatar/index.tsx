import React, { useMemo } from 'react';
import '../../../src/tailwind.css';

export type AvatarSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';
export type AvaratGener = 'male' | 'female' | 'other';

interface AvatarProps {
  src: string;
  size?: AvatarSize;
  alt?: string;
  gender?: AvaratGener;
}
const sizeClasses: Record<string, string> = {
  xs: 'h-8 w-8',
  small: 'h12 w-12',
  medium: 'h-24 w-24',
  large: 'h-36 w-36',
  xl: 'h-48 w-48',
};

const BASE_AVATAR_CLASSES =
  'inline-block rounded-full object-cover ring-2 ring-white dark:filter dark:brightness-75';

const getSizeClasses = (size: string) => sizeClasses[size];

/**
 * This component is used to display a single avatar image
 * @param props
 * @returns
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 'small',
  alt = '',
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    return [sizeClass];
  }, [size]);

  return (
    <img
      className={`${BASE_AVATAR_CLASSES} ${computedClasses}`}
      src={src}
      alt={alt}
    />
  );
};
