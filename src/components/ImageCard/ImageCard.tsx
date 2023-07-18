import React from 'react';
import classNames from 'classnames';
import ImageCardProps from './ImageCard.interface';

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
