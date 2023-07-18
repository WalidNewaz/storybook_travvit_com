import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Slide } from './Slide';
import { Property } from 'csstype';

describe('Slide', () => {
  it('should render the slide with correct media and description', () => {
    const index = 0;
    const currentSlide = 0;
    const media = 'slide-media-url';
    const alt = 'Slide Media';
    const description = 'Slide Description';
    const buttonText = 'Button Text';
    const buttonOnClick = jest.fn();
    const descriptionClasses = 'description-class';
    const mediaClassName = 'media-class';
    const slideMediaStyle = { objectFit: 'cover' as Property.ObjectFit };
    const className = 'slide-class';

    const { getByTestId } = render(
      <Slide
        index={index}
        currentSlide={currentSlide}
        media={media}
        alt={alt}
        description={description}
        descriptionClasses={descriptionClasses}
        buttonText={buttonText}
        buttonOnClick={buttonOnClick}
        mediaClassName={mediaClassName}
        slideMediaStyle={slideMediaStyle}
        className={className}
      />,
    );

    const slideMediaElement = getByTestId(`slide-media-${index}`);
    expect(slideMediaElement).toBeInTheDocument();
  });
});
