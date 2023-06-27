import React, { useMemo } from 'react';
import '../../../src/tailwind.css';

interface AvatarProps {
  src: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  gender?: 'male' | 'female';
}
const sizeClasses: Record<string, string> = {
  small: 'h12 w-12',
  medium: 'h-24 w-24',
  large: 'h-36 w-36',
  xl: 'h-48 w-48',
};

const BASE_AVATAR_CLASSES = 'inline-block rounded-full ring-2 ring-white';

const getSizeClasses = (size: string) => sizeClasses[size];

export const Avatar: React.FC<AvatarProps> = ({ src, size = 'small' }) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    return [sizeClass];
  }, [size]);

  return (
    <img
      className={`${BASE_AVATAR_CLASSES} ${computedClasses}`}
      src={src}
      alt=""
    />
  );
};
