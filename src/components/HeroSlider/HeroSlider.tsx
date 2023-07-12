import React, { useState, useEffect } from 'react';
import type { clickHandler } from '../../types/eventHandler.types';
import { Slides } from './Slides';
import { SliderNav } from './SliderNav';
import { SliderDots } from './SliderDots';

const SLIDE_DURATION = 5000;

const SLIDE_CONTAINER_CLASSES = `w-full`;

export type MediaTypes = 'image' | 'video';

export interface CardProps {
  media: string;
  mediaType?: string;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: clickHandler;
  mediaClassName?: string;
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
