import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '../Icons';
import { Slides } from './Slides';
import type { clickHandler } from '../../types/eventHandler.types';

const SLIDE_DURATION = 5000;
const INTERVAL_DELAY = 150;

const SLIDE_CONTAINER_CLASSES = `hero-slider-container w-full`;
const NAV_BUTTON_CLASSES = `absolute top-1/2 transform -translate-y-1/2 text-white`;
const NAV_BUTTON_ICON_CLASSES = `w-24 h-24 text-slate-300 opacity-50 hover:opacity-80 hover:ease-in transition transition-opacity ease-in delay-${INTERVAL_DELAY}`;

export type MediaTypes = 'image' | 'video';

export interface CardProps {
  media: string;
  mediaType?: string;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: clickHandler;
  // link?: string;
  // containerClasses?: string;
  // containerStyle?: React.CSSProperties;
  // mediaClasses?: string;
  mediaStyle?: React.CSSProperties;
  className?: string;
}

interface HeroSliderProps {
  slides: Array<CardProps>;
  containerClasses?: string;
  containerStyle?: React.CSSProperties;
  slideContainerClasses?: string;
  mediaStyle?: React.CSSProperties;
}

/**
 * A Hero Slider is generally used as a media slider at the top of a
 * page's content section.
 *
 * @returns A JSX media slider component.
 */
export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  containerClasses,
  containerStyle,
  mediaStyle = {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = (): void => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, SLIDE_DURATION); // Rotate slides every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`${SLIDE_CONTAINER_CLASSES} ${containerClasses}`}
      style={containerStyle}
      data-testid="slider-container" // Add data-testid attribute here
    >
      <Slides
        slides={slides}
        currentSlide={currentSlide}
        mediaStyle={mediaStyle}
      />
      <div id="slider-nav" className="static pt-[22rem]">
        <button
          className={`${NAV_BUTTON_CLASSES} left-2`}
          onClick={handlePrevSlide}
          aria-label="Previous" // Add aria-label attribute
          data-testid="Previous" // Add data-testid attribute
        >
          <span className="hidden-text">Previous</span>
          <ChevronLeft classes={NAV_BUTTON_ICON_CLASSES} />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
          onClick={handleNextSlide}
          aria-label="Next" // Add aria-label attribute
          data-testid="Next" // Add data-testid attribute
        >
          <span className="hidden-text">Next</span>
          <ChevronRight classes={NAV_BUTTON_ICON_CLASSES} />
        </button>
      </div>

      <div
        id="slider-dots"
        className="absolute bottom-4 left-0 right-0 flex justify-center opacity-60"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide Dot ${index + 1}`} // Add aria-label attribute
            data-testid={`slide-dot-${index}`} // Add data-testid attribute
          />
        ))}
      </div>
    </div>
  );
};
