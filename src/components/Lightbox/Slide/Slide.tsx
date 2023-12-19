import React from 'react';
import { MediaCard } from '../../MediaCard/MediaCard';
import SlideProps from './Slide.interface';
import OverlayLabel from '../OverlayLabel';

const SLIDE_CLASSES = `absolute top-0 left-0 w-full h-full transition-opacity duration-500`;
const VISIBLE = 'opacity-100';
const TRANSPARENT = 'opacity-0';

const Slide: React.FC<SlideProps> = ({
  index,
  currentSlide,
  media,
  alt,
  description,
  mediaClassName,
  mediaStyle,
  slideMediaStyle,
  className,
}) => (
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
        containerStyle: {},
        mediaStyle: slideMediaStyle ? slideMediaStyle : mediaStyle,
        className,
      }}
    />
    <OverlayLabel key={index} label={description as string} />
  </div>
);

Slide.defaultProps = {
  media: '',
  alt: '',
  description: '',
  mediaClassName: '',
  mediaStyle: {},
  slideMediaStyle: {},
  className: '',
};

export default Slide;
