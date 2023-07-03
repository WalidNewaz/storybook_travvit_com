import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '../Icons';

export type MediaTypes = 'image' | 'video';

interface MediaCardProps {
  media: string;
  mediaType: MediaTypes;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  link?: string;
  containerClasses?: string;
  containerStyle?: React.CSSProperties;
  mediaClasses?: string;
  mediaStyle?: React.CSSProperties;
}

interface HeroSliderProps {
  slides: Array<MediaCardProps>;
  SlideComponent?: React.FC<any>;
  containerClasses?: string;
  containerStyle?: React.CSSProperties;
  descriptionClasses?: string;
  slideContainerClasses?: string;
  mediaStyle?: React.CSSProperties;
}

const SLIDE_DURATION = 5000;
const INTERVAL_DELAY = 150;

const SLIDE_CONTAINER_CLASSES = `relative w-full`;
const SLIDE_CLASSES = `absolute top-0 left-0 w-full h-full transition-opacity duration-500`;
const NAV_BUTTON_CLASSES = `absolute top-1/2 transform -translate-y-1/2 text-white`;
const NAV_BUTTON_ICON_CLASSES = `w-24 h-24 text-slate-300 opacity-50 hover:opacity-80 hover:ease-in transition transition-opacity ease-in delay-${INTERVAL_DELAY}`;

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  SlideComponent,
  containerClasses,
  containerStyle,
  descriptionClasses,
  slideContainerClasses,
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
      {slides.map(
        (
          {
            media,
            alt = '',
            description = '',
            buttonText = '',
            buttonOnClick = () => undefined,
            mediaClasses = '',
            mediaStyle: slideMediaStyle = null,
          },
          index,
        ) => (
          <div
            key={index}
            className={`${SLIDE_CLASSES} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            data-testid={`slide-media-${index}`} // Add data-testid attribute
          >
            {SlideComponent && (
              <SlideComponent
                media={media}
                mediaType="image"
                alt={alt}
                description={description}
                descriptionClasses={descriptionClasses}
                buttonText={buttonText}
                buttonOnClick={buttonOnClick}
                containerClasses={slideContainerClasses}
                mediaClasses={mediaClasses}
                mediaStyle={slideMediaStyle ? slideMediaStyle : mediaStyle}
              />
            )}
          </div>
        ),
      )}

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
