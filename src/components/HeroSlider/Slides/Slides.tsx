import React from 'react';
import { Slide } from '../Slide/Slide';
import SlidesProps from './Slides.interface';

export const Slides: React.FC<SlidesProps> = ({
  slides,
  currentSlide,
  mediaStyle,
}) =>
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
        key={index}
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
