import React, { useState, useEffect } from 'react';
import { Slides } from './Slides/Slides';
import { SliderNav } from './SliderNav/SliderNav';
import { SliderDots } from './SliderDots/SliderDots';
import { HeroSliderProps } from '../../interfaces';

const DEFAULT_SLIDE_DURATION = 5000;

const SLIDE_CONTAINER_CLASSES = `w-full relative`;

export type MediaTypes = 'image' | 'video';

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
  slideDuration,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const duration = slideDuration || DEFAULT_SLIDE_DURATION;

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
    const interval = setInterval(handleNextSlide, duration); // Rotate slides every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`hero-slider-container ${SLIDE_CONTAINER_CLASSES} ${containerClasses}`}
      style={containerStyle}
      data-testid="slider-container" // Add data-testid attribute here
    >
      <Slides
        slides={slides}
        currentSlide={currentSlide}
        mediaStyle={mediaStyle}
      />
      <SliderNav
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
      <SliderDots
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};
