import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { Button } from '../Button/Button';
import { ResponsiveImage, ImageSource } from '../ResponsiveImage';
import { ResponsiveVideo, VideoSource } from '../ResponsiveVideo';

type MediaSource = ImageSource & VideoSource;

interface MediaCardProps {
  sources?: MediaSource[];
  imageSources?: ImageSource[];
  videoSources?: VideoSource[];
  height?: number;
  width?: number;
  loading?: 'eager' | 'lazy';
  sizes?: string;
  src?: string;
  srcset?: string;
  className?: string;
  requiredMediaType?: string;
  children?: ReactNode;
  // type: 'image' | 'video';
  /**
   * Is the card rounded?
   * @default false
   * */
  rounded?: boolean;
  /**
   * Media type
   * @default 'image'
   * */
  mediaType: 'image' | 'video';
  /**
   * Media alt text
   */
  alt?: string;
  /**
   * Card title
   * @default ''
   * */
  description?: string;
  /**
   * Custom style classes for the description
   * @default ''
   */
  descriptionClasses?: string;
  /**
   * CTA Button text
   * @default ''
   * */
  buttonText?: string;
  /**
   * Is the CTA Button primary?
   * @default true
   * */
  buttonPrimary?: boolean;
  /**
   * CTA Button onClick handler
   * @default () => {}
   * */
  buttonOnClick?: () => void;
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
   * Custom style classes for the media
   * @default ''
   * */
  mediaClassName?: string;
  /**
   * Custom style for the media
   * @default {}
   * */
  mediaStyle?: React.CSSProperties;
}

const CONTAINER_CLASSES = `
  relative
  max-w-[100rem]
  overflow-hidden
`;

const DEFAULT_OVERLAY_CLASSES = `
  absolute
  top-0
  left-0
  w-full
  h-full
  bg-black-500
  flex
  flex-col
  justify-center
  items-center
  p-4
  text-white
`;

const DEFAULT_DESCRIPTION_CLASSES = `text-center`;

const Media: React.FC<{
  mediaType: 'image' | 'video';
  imageSources?: ImageSource[];
  videoSources?: VideoSource[];
  alt?: string;
  src?: string;
  mediaClassName?: string;
  requiredMediaType?: string;
}> = ({
  mediaType,
  imageSources,
  videoSources,
  alt = '',
  src = '',
  mediaClassName,
  requiredMediaType = 'video/mp4',
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

  if (mediaType === 'image') {
    return (
      <ResponsiveImage
        sources={imageSources}
        alt={alt}
        src={src}
        className={`${MEDIA_CLASSES} ${mediaClassName}`}
        aria-label="media-image"
        data-testid="media-image"
      />
    );
  }

  if (mediaType === 'video') {
    return (
      <ResponsiveVideo
        sources={videoSources}
        requiredMediaType={requiredMediaType}
        muted
        autoPlay
        className={`${MEDIA_CLASSES} ${mediaClassName}`}
      />
    );
  }

  return null;
};

/**
 * This component is a card with a media element (image or video) and a description with a CTA button.
 * @param props
 * @returns
 */
export const MediaCard: React.FC<MediaCardProps> = ({
  imageSources,
  videoSources,
  src = '',
  requiredMediaType = 'video/mp4',
  rounded = false,
  mediaType = 'image',
  alt = '',
  description,
  descriptionClasses = '',
  buttonText = '',
  buttonPrimary = true,
  buttonOnClick = () => undefined,
  containerClasses = '',
  containerStyle = {},
  mediaClassName = '',
  mediaStyle = {},
}) => {
  const containerClassNames = classNames(
    'card',
    CONTAINER_CLASSES,
    containerClasses,
    rounded ? 'rounded-3xl' : '',
  );

  const descriptionClassName = classNames(
    DEFAULT_DESCRIPTION_CLASSES,
    descriptionClasses,
  );

  return (
    <div
      style={containerStyle}
      className={containerClassNames}
      aria-label="media-card" // Add aria-label attribute
      data-testid="media-card" // Add data-testid attribute
    >
      <div
        style={mediaStyle}
        className={`media-card__media relative overflow-hidden shrink-0 w-full ${mediaClassName}`}
      >
        <Media
          mediaType={mediaType}
          imageSources={imageSources}
          videoSources={videoSources}
          src={src}
          alt={alt}
          mediaClassName={mediaClassName}
          requiredMediaType={requiredMediaType}
        />
      </div>
      <div className={DEFAULT_OVERLAY_CLASSES}>
        <h1 className={descriptionClassName}>{description}</h1>
        <div className="buttons pt-8">
          <Button
            onClick={buttonOnClick}
            label={buttonText}
            primary={buttonPrimary}
          />
        </div>
      </div>
    </div>
  );
};
