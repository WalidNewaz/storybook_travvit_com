import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SliderDots } from './SliderDots';
import { StandardLonghandProperties } from 'csstype';

test('should render the slider dots correctly', () => {
  const slides = [
    {
      media: 'slide1.jpg',
      alt: 'Slide 1',
      description: 'Slide 1 Description',
      buttonText: 'Button 1',
      descriptionClasses: 'description-class-1',
      buttonOnClick: jest.fn(),
      mediaStyle: { objectFit: 'cover' } as StandardLonghandProperties,
      className: 'slide-class-1',
      mediaClassName: 'media-class-1',
    },
    {
      media: 'slide2.jpg',
      alt: 'Slide 2',
      description: 'Slide 2 Description',
      buttonText: 'Button 2',
      descriptionClasses: 'description-class-2',
      buttonOnClick: jest.fn(),
      mediaStyle: { objectFit: 'contain' } as StandardLonghandProperties,
      className: 'slide-class-2',
      mediaClassName: 'media-class-2',
    },
  ];
  const currentSlide = 2;
  const setCurrentSlide = jest.fn();

  const { getByTestId } = render(
    <SliderDots
      slides={slides}
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
    />,
  );

  slides.forEach((_, index) => {
    const slideDotElement = getByTestId(`slide-dot-${index}`);
    expect(slideDotElement).toBeInTheDocument();
    expect(slideDotElement).toHaveClass(
      index === currentSlide ? 'bg-white' : 'bg-gray-400',
    );
    expect(slideDotElement).toHaveAttribute(
      'aria-label',
      `Slide Dot ${index + 1}`,
    );

    fireEvent.click(slideDotElement);
    expect(setCurrentSlide).toHaveBeenCalledWith(index);
  });
});
