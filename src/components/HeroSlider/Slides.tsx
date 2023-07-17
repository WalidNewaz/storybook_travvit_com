import React from 'react';
import { MediaCard } from '../MediaCard';
import HeadingButtonActionLayer from '../MediaCard/HeadingButtonActionLayer';
import { SlideProps } from '../../interfaces';

const SLIDE_CLASSES = `absolute top-0 left-0 w-full h-full transition-opacity duration-500`;
const VISIBLE = 'opacity-100';
const TRANSPARENT = 'opacity-0';

export const Slides: React.FC<{
  slides: Array<SlideProps>;
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
        mediaClassName = '',
      },
      index,
    ) => (
      <div
        key={index}
        className={`slide-media-${index} ${SLIDE_CLASSES} ${
          index === currentSlide ? VISIBLE : TRANSPARENT
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
              className: mediaClassName,
            },
            videoProps: {
              sources: [],
              requiredMediaType: '',
            },
            actionLayer: (
              <HeadingButtonActionLayer
                heading={description || ''}
                label={buttonText || ''}
                headingClassName={descriptionClasses}
                onClick={buttonOnClick}
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
