import React, { useState, useEffect } from 'react';

interface IconProps {
  classes?: string;
}

const ChevronLeft: React.FC<IconProps> = ({ classes }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={classes}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRight: React.FC<IconProps> = ({ classes }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={classes}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

export type MediaTypes = 'image' | 'video';

interface MediaCardProps {
  media: string;
  mediaType: MediaTypes;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
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

const SLIDE_CONTAINER_CLASSES = `relative w-full`;
const SLIDE_CLASSES = `absolute top-0 left-0 w-full h-full transition-opacity duration-500`;
const NAV_BUTTON_CLASSES = `absolute top-1/2 transform -translate-y-1/2 text-white`;
const NAV_BUTTON_ICON_CLASSES = `w-24 h-24 text-slate-300 opacity-50 hover:opacity-80 hover:ease-in transition transition-opacity ease-in delay-150`;

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

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000); // Rotate slides every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`${SLIDE_CONTAINER_CLASSES} ${containerClasses}`}
      style={containerStyle}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${SLIDE_CLASSES} ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {SlideComponent && (
            <SlideComponent
              media={slide.media}
              mediaType="image"
              alt={slide.alt}
              description={slide.description}
              descriptionClasses={descriptionClasses}
              buttonText={slide.buttonText}
              buttonOnClick={slide.buttonOnClick}
              containerClasses={slideContainerClasses}
              mediaClasses={slide.mediaClasses}
              mediaStyle={slide.mediaStyle ? slide.mediaStyle : mediaStyle}
            />
          )}
        </div>
      ))}

      <div id="slider-nav" className="static pt-[22rem]">
        <button
          className={`${NAV_BUTTON_CLASSES} left-2`}
          onClick={handlePrevSlide}
        >
          <span className="hidden-text">Previous</span>
          <ChevronLeft classes={NAV_BUTTON_ICON_CLASSES} />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
          onClick={handleNextSlide}
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
          />
        ))}
      </div>
    </div>
  );
};
