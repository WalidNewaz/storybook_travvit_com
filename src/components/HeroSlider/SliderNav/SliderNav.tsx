import React from 'react';
import { ChevronLeft, ChevronRight } from '../../Icons';
import SliderNavProps from './SliderNav.interface';

const INTERVAL_DELAY = 150;

const NAV_BUTTON_CLASSES = `absolute top-1/2 transform -translate-y-1/2 text-white`;
const NAV_BUTTON_ICON_CLASSES = `w-24 h-24 text-slate-300 opacity-50 hover:opacity-80 hover:ease-in transition transition-opacity ease-in delay-${INTERVAL_DELAY}`;

export const SliderNav: React.FC<SliderNavProps> = ({
  handlePrevSlide,
  handleNextSlide,
}) => (
  <div className="slider-nav static pt-[22rem]">
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
      className={`${NAV_BUTTON_CLASSES} right-2`}
      onClick={handleNextSlide}
      aria-label="Next" // Add aria-label attribute
      data-testid="Next" // Add data-testid attribute
    >
      <span className="hidden-text">Next</span>
      <ChevronRight classes={NAV_BUTTON_ICON_CLASSES} />
    </button>
  </div>
);
