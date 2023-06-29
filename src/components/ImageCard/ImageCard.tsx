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
   * Custom style classes for the container
   * @default ''
   */
  containerClasses?: string;
  /**
   * Custom style for the container
   * @default {}
   * */
  containerStyle?: React.CSSProperties;
  /**
   * Custom style classes for the image
   * @default ''
   * */
  imageClasses?: string;
  /**
   * Custom style for the image
   * @default {}
   * */
  imageStyle?: React.CSSProperties;
}

const CONTAINER_CLASSES = `
  overflow-hidden
  w-60
  h-60
  m-7
  xs:w-72
  xs:h-72
  shrink-0
`;

const IMAGE_CLASSES = `
  object-cover
  h-full
  dark-img
`;

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  containerClasses = '',
  containerStyle = {},
  imageClasses = '',
  imageStyle = {},
}) => {
  return (
    <div
      style={containerStyle}
      className={`${CONTAINER_CLASSES} ${containerClasses}`}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: 'inherit', ...imageStyle }}
        className={`${IMAGE_CLASSES} ${imageClasses}`}
      />
    </div>
  );
};
