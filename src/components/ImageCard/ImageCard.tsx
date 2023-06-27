import React from 'react';
import '../../../src/tailwind.css';

export type RadiusType =
  | 'small'
  | 'medium'
  | 'large'
  | 'full'
  | 'xl'
  | '2xl'
  | '3xl';

interface ImageCardProps {
  /**
   * Image url
   */
  src: string;
  /**
   * Image alt text
   */
  alt?: string;
  /**
   * Image border radius
   * @default small
   */
  borderRadius?: RadiusType;
}

const getBorderRadius = (radius: RadiusType) => {
  switch (radius) {
    case 'small': {
      return 'rounded-sm';
    }
    case 'medium': {
      return 'rounded-md';
    }
    case 'large': {
      return 'rounded-lg';
    }
    case 'full': {
      return 'rounded-full';
    }
    case 'xl': {
      return 'rounded-xl';
    }
    case '2xl': {
      return 'rounded-2xl';
    }
    case '3xl': {
      return 'rounded-3xl';
    }
    default: {
      return 'rounded-sm';
    }
  }
};

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  borderRadius = 'small',
}) => {
  const br = getBorderRadius(borderRadius);

  return (
    <div className={`${br} overflow-hidden w-64 h-64 m-3`}>
      <img
        src={src}
        alt={alt}
        style={{ borderRadius }}
        className="object-cover w-full h-full dark:filter dark:brightness-75"
      />
    </div>
  );
};
