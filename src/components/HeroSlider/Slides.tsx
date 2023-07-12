import React from 'react';
import { MediaCard } from '../MediaCard';
import HeadingButtonActionLayer from '../MediaCard/HeadingButtonActionLayer';
import { CardProps } from './HeroSlider';

const SLIDE_CLASSES = `absolute top-0 left-0 w-full h-full transition-opacity duration-500`;

export const Slides: React.FC<{
  slides: Array<CardProps>;
  currentSlide: number;
  mediaStyle?: React.CSSProperties;
}> = ({ slides, currentSlide, mediaStyle }) =>
  slides.map(
    (
      {
        media,
        alt = '',
        description = '',
        buttonText = '',
        descriptionClasses,
        buttonOnClick = () => undefined,
        mediaStyle: slideMediaStyle = null,
        className = '',
      },
      index,
    ) => (
      <div
        key={index}
        className={`slide-media-${index} ${SLIDE_CLASSES} ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
        data-testid={`slide-media-${index}`} // Add data-testid attribute
      >
        <MediaCard
          {...{
            mediaType: 'image',
            imageProps: {
              sources: [],
              alt: alt || '',
              src: media,
            },
            videoProps: {
              sources: [],
              requiredMediaType: '',
            },
            actionLayer: (
              <HeadingButtonActionLayer
                heading={description || ''}
                label={buttonText || ''}
                onClick={buttonOnClick}
                className={descriptionClasses}
              />
            ),
            containerStyle: {},
            mediaStyle: slideMediaStyle ? slideMediaStyle : mediaStyle,
            className,
          }}
        />
      </div>
    ),
  );
