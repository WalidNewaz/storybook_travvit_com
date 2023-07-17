import React from 'react';
import { SlideProps } from '../../interfaces';

const ACTIVE = 'bg-white';
const PASSIVE = 'bg-gray-400';

export const SliderDots: React.FC<{
  slides: Array<SlideProps>;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}> = ({ slides, currentSlide, setCurrentSlide }) => (
  <div className="slider-dots absolute bottom-4 left-0 right-0 flex justify-center opacity-60">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 mx-2 rounded-full ${
          index === currentSlide ? ACTIVE : PASSIVE
        }`}
        onClick={() => setCurrentSlide(index)}
        aria-label={`Slide Dot ${index + 1}`} // Add aria-label attribute
        data-testid={`slide-dot-${index}`} // Add data-testid attribute
      />
    ))}
  </div>
);
