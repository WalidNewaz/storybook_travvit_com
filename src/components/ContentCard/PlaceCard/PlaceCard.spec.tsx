/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlaceCard } from './PlaceCard';

describe('PlaceCard', () => {
  it('renders without error', () => {
    render(
      <PlaceCard
        mediaType="image"
        imageProps={{
          sources: [],
          src: 'image.jpg',
          alt: 'Place Image',
        }}
        bookmarkHandler={() => {}}
        badges={['New', 'Featured']}
        heading="Place Name"
        headingLink="/place"
        subHeading="Place Location"
        subHeadingLink="/location"
        rating="4.5"
        className="custom-class"
      />,
    );

    const headingElement = screen.getByText('Place Name');
    const subHeadingElement = screen.getByText('Place Location');
    const ratingElement = screen.getByText('4.5');

    expect(headingElement).toBeInTheDocument();
    expect(subHeadingElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });

  // Add more test cases as needed
});
