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
    likeHandler: jest.fn(),
    addHandler: jest.fn(),
    shareHandler: jest.fn(),
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
    const buttonElementLike = getByTestId('button-element-Likebutton');
    const iconElementLike = getByTestId('icon-element-Likebutton');
    const buttonElementAdd = getByTestId('button-element-Addbutton');
    const iconElementAdd = getByTestId('icon-element-Addbutton');
    const buttonElementShare = getByTestId('button-element-Sharebutton');
    const iconElementShare = getByTestId('icon-element-Sharebutton');

    expect(nameElement).toBeInTheDocument();
    expect(placeElement).toBeInTheDocument();
    expect(createdByElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(buttonElementLike).toBeInTheDocument();
    expect(iconElementLike).toBeInTheDocument();
    expect(buttonElementAdd).toBeInTheDocument();
    expect(iconElementAdd).toBeInTheDocument();
    expect(buttonElementShare).toBeInTheDocument();
    expect(iconElementShare).toBeInTheDocument();
  });
});
