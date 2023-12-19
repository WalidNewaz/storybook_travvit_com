import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SliderNav from './SliderNav';

test('should handle previous and next slide actions', () => {
  const handlePrevSlide = jest.fn();
  const handleNextSlide = jest.fn();

  const { getByTestId } = render(
    <SliderNav
      handlePrevSlide={handlePrevSlide}
      handleNextSlide={handleNextSlide}
    />,
  );

  const prevButton = getByTestId('Previous');
  const nextButton = getByTestId('Next');

  fireEvent.click(prevButton);
  expect(handlePrevSlide).toHaveBeenCalledTimes(1);

  fireEvent.click(nextButton);
  expect(handleNextSlide).toHaveBeenCalledTimes(1);
});
