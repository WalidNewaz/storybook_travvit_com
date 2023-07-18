import React from 'react';
import { SlideProps } from '../../interfaces';
import { Slide } from './Slide/Slide';

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
      <Slide
        index={index}
        currentSlide={currentSlide}
        media={media}
        alt={alt}
        description={description}
        descriptionClasses={descriptionClasses}
        buttonText={buttonText}
        buttonOnClick={buttonOnClick}
        mediaClassName={mediaClassName}
        mediaStyle={mediaStyle}
        slideMediaStyle={slideMediaStyle}
        className={className}
      />
    ),
  );
