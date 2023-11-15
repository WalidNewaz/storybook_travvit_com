import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { ActivityCard } from './ActivityCard';
import type { MediaType } from '../../../types';

describe('ActivityCard', () => {
  const mockProps = {
    name: 'Test Activity',
    slug: '/test-activity',
    place: 'Test Place',
    placeSlug: '/test-place',
    createdBy: 'Test User',
    createdBySrc: '/test-user.jpg',
    createdByLink: '/test-user',
    rating: '4.5',
    mediaType: 'image' as MediaType,
    imageProps: {
      sources: [],
      src: '/test-image.jpg',
      alt: 'Test Image',
    },
    bookmarkHandler: jest.fn(),
    badges: ['badge1', 'badge2'],
    className: 'test-class',
  };

  it('renders the ActivityCard component with props', () => {
    const { getByText, getByAltText, getByTestId } = render(
      <ActivityCard {...mockProps} />,
    );

    const nameElement = getByText('Test Activity');
    const placeElement = getByText('Test Place');
    const createdByElement = getByText('Test User');
    const ratingElement = getByText('4.5');
    const imageElement = getByAltText('Test Image');
    const buttonElementBookmark = getByTestId('button-element-Bookmarkbutton');
    const iconElementBookmark = getByTestId('icon-element-Bookmarkbutton');

    expect(nameElement).toBeInTheDocument();
    expect(placeElement).toBeInTheDocument();
    expect(createdByElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(buttonElementBookmark).toBeInTheDocument();
    expect(iconElementBookmark).toBeInTheDocument();
  });
});
