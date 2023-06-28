import React from 'react';

interface ImageCarouselProps {
  images: string[];
  ImageCardComponent: React.FC<any>;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <div className="relative">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Carousel"
              className={`rounded-lg mx-1 ${
                index === currentIndex ? 'highlighted-image' : 'other-image'
              }`}
              style={{ flex: `0 0 33.33%` }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <button
            className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
