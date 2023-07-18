import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components'; // Add this line at the top of your test file
import { HeroSlider } from './HeroSlider';

import type { MediaTypes } from './HeroSlider';

describe('HeroSlider', () => {
  const slides = [
    { media: 'slide1.jpg', mediaType: 'image' as MediaTypes },
    { media: 'slide2.jpg', mediaType: 'image' as MediaTypes },
    { media: 'slide3.jpg', mediaType: 'image' as MediaTypes },
  ];

  test('renders the slider with slides', () => {
    render(<HeroSlider slides={slides} />);

    // Assert that the slider container is rendered
    const sliderContainer = screen.getByTestId('slider-container');
    expect(sliderContainer).toBeInTheDocument();

    // Assert that the slide dots are rendered
    const slideDots = screen.getAllByRole('button', { name: /Slide Dot/ });
    expect(slideDots.length).toBe(slides.length);

    // Assert that the navigation buttons are rendered
    const prevButton = screen.getByTestId('Previous');
    const nextButton = screen.getByTestId('Next');
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('changes slide when next/previous buttons are clicked', () => {
    render(<HeroSlider slides={slides} />);

    // Find the slide components
    const slideComponents = screen.getAllByTestId(/^slide-media-/);
    expect(slideComponents.length).toBe(slides.length);

    // Assert that the initial slide is displayed
    expect(slideComponents[0].classList).toContain('opacity-100');
    expect(slideComponents[1].classList).toContain('opacity-0');

    // Click the next button and assert that the slide changes
    fireEvent.click(screen.getByTestId('Next'));
    expect(slideComponents[0].classList).toContain('opacity-0');
    expect(slideComponents[1].classList).toContain('opacity-100');

    // Click the previous button and assert that the slide changes back
    fireEvent.click(screen.getByTestId('Previous'));
    expect(slideComponents[0].classList).toContain('opacity-100');
    expect(slideComponents[1].classList).toContain('opacity-0');
  });

  test('changes slide when slide dot is clicked', () => {
    render(<HeroSlider slides={slides} />);

    // Find the slide components
    const slideComponents = screen.getAllByTestId(/^slide-dot-/);
    expect(slideComponents.length).toBe(slides.length);

    // Click the second slide dot and assert that the slide changes
    fireEvent.click(screen.getByTestId('slide-dot-1'));
    expect(slideComponents[0].classList).toContain('bg-gray-400');
    expect(slideComponents[1].classList).toContain('bg-white');
  });
});
