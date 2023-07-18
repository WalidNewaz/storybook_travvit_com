import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Slides } from './Slides';
import { StandardLonghandProperties } from 'csstype';

describe('Slides', () => {
  test('should render the slides correctly', () => {
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

    const currentSlide = 0;
    const mediaStyle = { objectFit: 'cover' };

    const { getByTestId } = render(
      <Slides
        slides={slides}
        currentSlide={currentSlide}
        mediaStyle={mediaStyle as StandardLonghandProperties}
      />,
    );

    const slideElements = [
      getByTestId('slide-media-0'),
      getByTestId('slide-media-1'),
    ];
    expect(slideElements.length).toBe(slides.length);
  });

  test('should render the slides without button click action handler', () => {
    const slides = [
      {
        media: 'slide1.jpg',
        alt: 'Slide 1',
        description: 'Slide 1 Description',
        buttonText: 'Button 1',
        descriptionClasses: 'description-class-1',
        mediaStyle: { objectFit: 'cover' } as StandardLonghandProperties,
        className: 'slide-class-1',
        mediaClassName: 'media-class-1',
      },
    ];

    const currentSlide = 0;
    const mediaStyle = { objectFit: 'cover' };

    const { getByTestId } = render(
      <Slides
        slides={slides}
        currentSlide={currentSlide}
        mediaStyle={mediaStyle as StandardLonghandProperties}
      />,
    );

    const slideElements = [getByTestId('slide-media-0')];
    expect(slideElements.length).toBe(1);
  });
});
