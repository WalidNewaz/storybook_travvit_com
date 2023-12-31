import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PlaceCardGroup } from './PlaceCardGroup';
import type { MediaType } from '../../../types';

describe('PlaceCardGroup', () => {
  // Mocked event handlers
  const bookmarkHandler = jest.fn();

  test('renders the activity card group', () => {
    // Mocked places data
    const places = [
      {
        id: '1',
        mediaType: 'image' as MediaType,
        imageProps: {
          sources: [],
          src: '/test-image.jpg',
          alt: 'Test Image',
        },
        badges: ['badge1', 'badge2'],
        name: 'Place 11',
        slug: 'place-11',
        parent: 'Place 1',
        parentSlug: 'place-1',
        rating: '4.5',
      },
      {
        id: '2',
        mediaType: 'image' as MediaType,
        imageProps: {
          sources: [],
          src: '/test-image.jpg',
          alt: 'Test Image',
        },
        badges: ['badge1', 'badge2'],
        name: 'Place 12',
        slug: 'place-12',
        parent: 'Place 1',
        parentSlug: 'place-1',
        rating: '4.6',
      },
    ];

    const { container } = render(
      <PlaceCardGroup places={places} bookmarkHandler={bookmarkHandler} />,
    );

    // Use the `getByRole` query to select the container element
    // and assert its child component count
    const placeCards = container.querySelectorAll('.place-card');
    expect(placeCards.length).toBe(places.length);
  });

  test('clicks on the action buttons', () => {
    // Mocked places data
    const places = [
      {
        id: '1',
        mediaType: 'image' as MediaType,
        imageProps: {
          sources: [],
          src: '/test-image.jpg',
          alt: 'Test Image',
        },
        badges: ['badge1', 'badge2'],
        name: 'Place 11',
        slug: 'place-11',
        parent: 'Place 1',
        parentSlug: 'place-1',
        rating: '4.5',
      },
    ];

    const { getByTestId } = render(
      <PlaceCardGroup places={places} bookmarkHandler={bookmarkHandler} />,
    );

    const bookmarkBtn = getByTestId('button-element-Bookmarkbutton');
    fireEvent.click(bookmarkBtn);
    expect(bookmarkHandler).toHaveBeenCalledTimes(1);
  });
});
