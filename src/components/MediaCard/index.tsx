import React, { ReactNode } from 'react';

import { ResponsiveImageProps } from '../ResponsiveImage';
import { ResponsiveVideoProps } from '../ResponsiveVideo';
import { MediaLayer } from './MediaLayer';

export interface MediaCardProps {
  /**
   * Media type
   * @default 'image'
   * */
  mediaType: 'image' | 'video';

  imageProps?: ResponsiveImageProps;

  videoProps?: ResponsiveVideoProps;

  /**
   * a React component that is rendered above the media layer.
   */
  actionLayer?: ReactNode;
  /**
   * Custom style for the container
   * @default {}
   * */
  containerStyle?: React.CSSProperties;
  /**
   * Custom style for the media
   * @default {}
   * */
  mediaStyle?: React.CSSProperties;
}

const CONTAINER_CLASSES = `
  max-w-[100rem]
  overflow-hidden
`;

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
  containerStyle = {},
  mediaStyle = {},
}) => {
  return (
    <div
      style={containerStyle}
      className={CONTAINER_CLASSES}
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
