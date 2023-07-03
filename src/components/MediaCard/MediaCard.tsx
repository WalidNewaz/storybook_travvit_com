import React from 'react';
import classNames from 'classnames';

import { Button } from '../Button/Button';

interface MediaCardProps {
  /**
   * Is the card rounded?
   * @default false
   * */
  rounded?: boolean;
  /**
   * Media url
   */
  media: string;
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

const MEDIA_CLASSES = `
  absolute
  top-0
  left-0
  object-cover
  w-full
  h-full
  dark-img
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

/**
 * This component is a card with a media element (image or video) and a description with a CTA button.
 * @param props
 * @returns
 */
export const MediaCard: React.FC<MediaCardProps> = ({
  rounded = false,
  media,
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

  const renderMedia = () => {
    if (mediaType === 'image') {
      return (
        <img
          src={media}
          alt={alt}
          style={{ width: 'inherit' }}
          className={`${MEDIA_CLASSES} ${mediaClassName}`}
          aria-label="media-image" // Add aria-label attribute
          data-testid="media-image" // Add data-testid attribute
        />
      );
    }

    if (mediaType === 'video') {
      return (
        <video
          src={media}
          controls
          aria-label="media-video" // Add aria-label attribute
          data-testid="media-video" // Add data-testid attribute
        />
      );
    }

    return null;
  };

  return (
    <div
      style={containerStyle}
      className={containerClassNames}
      aria-label="media-card" // Add aria-label attribute
      data-testid="media-card" // Add data-testid attribute
    >
      <div
        style={mediaStyle}
        className={`media-card__media relative overflow-hidden shrink-0 w-full pb-8 ${mediaClassName}`}
      >
        {renderMedia()}
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
