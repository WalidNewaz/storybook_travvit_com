import React, { ReactNode } from 'react';
import { ResponsiveImage, ResponsiveImageProps } from '../ResponsiveImage';
import { ResponsiveVideo, ResponsiveVideoProps } from '../ResponsiveVideo';

interface MediaLayerProps extends Record<string, any> {
  imageProps?: ResponsiveImageProps;
  videoProps?: ResponsiveVideoProps;
  mediaType: 'image' | 'video';
}

/**
 * Creates a responsive media component based on the `mediaType`.
 * @param imageProps props for responsive image component
 * @param videoProps props for responsive video component
 * @param mediaType The media type being rendered
 * @returns A responsive media component
 */
export const MediaLayer: React.FC<MediaLayerProps> = ({
  imageProps,
  videoProps,
  mediaType,
  ...attributes
}) => {
  const MEDIA_CLASSES = `
    absolute
    top-0
    left-0
    object-cover
    w-full
    h-full
    dark-img
  `;

  let media: ReactNode = null;

  if (mediaType === 'image' && imageProps) {
    media = (
      <ResponsiveImage
        {...imageProps}
        className={`${MEDIA_CLASSES} ${imageProps.className}`}
        aria-label="media-image"
        data-testid="media-image"
      />
    );
  }

  if (mediaType === 'video' && videoProps) {
    media = (
      <ResponsiveVideo
        {...videoProps}
        aria-label="media-video"
        data-testid="media-video"
      />
    );
  }

  return (
    <div
      className="media-card__media overflow-hidden shrink-0 w-full"
      {...attributes}
    >
      {media}
    </div>
  );
};
