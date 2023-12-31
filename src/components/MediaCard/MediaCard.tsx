import React from 'react';

import { MediaLayer } from './MediaLayer/MediaLayer';
import MediaCardProps from './MediaCard.interface';

const CONTAINER_CLASSES = `media-card max-w-[95vw] overflow-hidden`;

/**
 * This component is a card with a media layer (image or video) and
 * an action layer that floats on top of the media layer.
 *
 * <ul>
 *  <li><strong>Media layer:</strong> If mediaType is set to "image" the imageProps
 * are used to create a ResponsiveImage. If the mediaType is set to "video"
 * the videoProps are used to create a ResponsiveVideo.</li>
 *  <li><b>Action layer:</b> The actionLayer prop should contain a React
 * component that is rendered above the media layer.</li>
 * </ul>
 *
 * @param props
 * @returns
 */
export const MediaCard: React.FC<MediaCardProps> = ({
  imageProps,
  videoProps,
  mediaType = 'image',
  actionLayer,
  containerStyle,
  mediaStyle,
  className = '',
}) => {
  return (
    <div
      style={containerStyle}
      className={`${CONTAINER_CLASSES} ${className}`}
      aria-label="media-card" // Add aria-label attribute
      data-testid="media-card" // Add data-testid attribute
    >
      <MediaLayer
        imageProps={imageProps}
        videoProps={videoProps}
        mediaType={mediaType}
        style={mediaStyle}
      />
      {actionLayer}
    </div>
  );
};
