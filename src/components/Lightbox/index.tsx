import React from 'react';

import Slider from './Slider/Slider';
import { SlideProps } from './Slides/Slides.interface';
import OverlayClose from './OverlayClose';

const LIGHTBOX_BACKGROUND_CLASSES = `
  lightbox-container
  fixed top-0 left-0
  w-full h-full
  bg-black bg-opacity-80
  flex items-center justify-center
`;
const LIGHTBOX_CONTAINER_CLASSES = `
  max-w-full max-h-full
  overflow-hidden
  w-full h-full`;

// Define the props for the Lightbox component
type LightboxProps = {
  slides: SlideProps[];
  rotate?: boolean;
  dots?: boolean;
  currentSlide: number;
  lightboxOpen: boolean;
  closeLightbox: () => void;
};

// Lightbox component
const Lightbox: React.FC<LightboxProps> = ({
  slides,
  rotate,
  dots,
  currentSlide,
  lightboxOpen,
  closeLightbox,
}) => {
  return (
    <div>
      {/* Lightbox */}
      {lightboxOpen && (
        <div className={LIGHTBOX_BACKGROUND_CLASSES}>
          <div className={LIGHTBOX_CONTAINER_CLASSES}>
            <Slider
              slides={slides}
              rotate={rotate}
              dots={dots}
              selectedSlide={currentSlide}
            />
            <OverlayClose closeLightbox={closeLightbox} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
