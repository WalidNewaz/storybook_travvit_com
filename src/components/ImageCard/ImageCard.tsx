import React from 'react';
import classNames from 'classnames';
import type { StyleType } from '../../types';

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
  containerClassName?: string;
  /**
   * Custom style for the container
   * @default {}
   * */
  containerStyle?: StyleType;
  /**
   * Custom style classes for the image
   * @default ''
   * */
  imageClassName?: string;
  /**
   * Custom style for the image
   * @default {}
   * */
  imageStyle?: StyleType;
}

const CONTAINER_CLASSES = `
  overflow-hidden
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
  containerClassName = '',
  containerStyle = {},
  imageClassName = '',
  imageStyle = {},
}) => {
  const containerClassNames = classNames(CONTAINER_CLASSES, containerClassName);
  const imageClassNames = classNames(IMAGE_CLASSES, imageClassName);
  return (
    <div style={containerStyle} className={containerClassNames}>
      <img
        src={src}
        alt={alt}
        style={{ width: 'inherit', ...imageStyle }}
        className={imageClassNames}
      />
    </div>
  );
};
