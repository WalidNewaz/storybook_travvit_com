import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
  slides: string[];
  containerClasses?: string;
  containerStyle?: React.CSSProperties;
}

const SLIDE_CONTAINER_CLASSES = `relative w-full`;
const NAV_BUTTON_CLASSES = `w-24 h-24 text-slate-300 opacity-50 hover:opacity-80 hover:ease-in transition transition-opacity ease-in delay-150`;

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  containerClasses,
  containerStyle,
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
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
        onClick={handlePrevSlide}
      >
        <span className="hidden-text">Previous</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={NAV_BUTTON_CLASSES}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
        onClick={handleNextSlide}
      >
        <span className="hidden-text">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={NAV_BUTTON_CLASSES}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-60">
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
