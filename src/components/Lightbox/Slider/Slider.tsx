import React, { useState, useEffect } from 'react';
import Slides from '../Slides/Slides';
import SliderNav from '../SliderNav/SliderNav';
import SliderDots from '../SliderDots/SliderDots';
import SliderProps from './Slider.interface';

const DEFAULT_SLIDE_DURATION = 5000;

const SLIDE_CONTAINER_CLASSES = `w-full h-full relative`;

export type MediaTypes = 'image' | 'video';

/**
 * A Hero Slider is generally used as a media slider at the top of a
 * page's content section.
 *
 * @returns A JSX media slider component.
 */
const Slider: React.FC<SliderProps> = ({
  slides,
  rotate,
  containerClasses,
  containerStyle,
  mediaStyle = {},
  slideDuration,
  selectedSlide,
  dots,
}) => {
  const [currentSlide, setCurrentSlide] = useState(selectedSlide as number);
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

  // Rotate slides automatically if `rotate` is true
  useEffect(() => {
    let intervalId: number;

    if (rotate) {
      intervalId = setInterval(handleNextSlide, duration) as unknown as number;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [rotate, duration, handleNextSlide]);

  return (
    <div
      className={`slider-container ${SLIDE_CONTAINER_CLASSES} ${containerClasses}`}
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
        dots={dots}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

Slider.defaultProps = {
  rotate: true,
  selectedSlide: 0,
  dots: true,
};

export default Slider;
