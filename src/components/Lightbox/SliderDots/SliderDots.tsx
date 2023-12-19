import React from 'react';
import SlideDotsProps from './SliderDots.interface';

const ACTIVE = 'bg-white';
const PASSIVE = 'bg-gray-400';
const SLIDER_STRIP_CLASSES = `
  slider-dots 
  absolute 
  bottom-4 left-0 right-0
  flex justify-center
  opacity-60`;
const SLIDER_DOT_CLASSES = `w-3 h-3 mx-2 rounded-full`;

const SliderDots: React.FC<SlideDotsProps> = ({
  slides,
  dots,
  currentSlide,
  setCurrentSlide,
}) =>
  dots && (
    <div className={SLIDER_STRIP_CLASSES}>
      {slides.map((_, index) => (
        <button
          key={index}
          className={`${SLIDER_DOT_CLASSES} ${
            index === currentSlide ? ACTIVE : PASSIVE
          }`}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Slide Dot ${index + 1}`} // Add aria-label attribute
          data-testid={`slide-dot-${index}`} // Add data-testid attribute
        />
      ))}
    </div>
  );

SliderDots.displayName = 'SliderDots';
SliderDots.defaultProps = {
  dots: true,
  currentSlide: 0,
};

export default SliderDots;
