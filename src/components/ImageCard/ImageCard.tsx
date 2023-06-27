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
   * Image width
   */
  width?: number;
  /**
   * Image height
   */
  height?: number;
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
  width = 200,
  height = 200,
  borderRadius = 'small',
}) => {
  const br = getBorderRadius(borderRadius);

  return (
    <div
      className={`${br} overflow-hidden col-span-1 sm:w-full sm:h-full`}
      // style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src={src}
        alt={alt}
        // width={width}
        // height={height}
        style={{ borderRadius }}
        className="object-cover "
      />
    </div>
  );
};
