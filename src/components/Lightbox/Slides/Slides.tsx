import React from 'react';
import Slide from '../Slide/Slide';
import SlidesProps from './Slides.interface';

const Slides: React.FC<SlidesProps> = ({ slides, currentSlide, mediaStyle }) =>
  slides.map(
    (
      {
        media,
        alt = '',
        description = '',
        mediaStyle: slideMediaStyle = undefined,
        className = '',
        mediaClassName = '',
      },
      index,
    ) => (
      <>
        <Slide
          key={index}
          index={index}
          currentSlide={currentSlide}
          media={media}
          alt={alt}
          description={description}
          mediaClassName={mediaClassName}
          mediaStyle={mediaStyle}
          slideMediaStyle={slideMediaStyle}
          className={className}
        />
      </>
    ),
  );

export default Slides;
