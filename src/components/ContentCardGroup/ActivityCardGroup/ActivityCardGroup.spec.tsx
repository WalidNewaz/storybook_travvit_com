import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ActivityCardGroup } from './ActivityCardGroup';
import type { MediaType } from '../../../types';

describe('ActivityCardGroup', () => {
  // Mocked activities data
  const activities = [
    {
      id: '1',
      mediaType: 'image' as MediaType,
      imageProps: {
        sources: [],
        src: '/test-image.jpg',
        alt: 'Test Image',
      },
      badges: ['badge1', 'badge2'],
      name: 'Activity 1',
      slug: 'activity-1',
      place: { id: '1', name: 'Place 1', slug: 'place-1' },
      createdBy: {
        id: '1',
        name: 'Creator 1',
        avatar: 'avatar-1',
        slug: 'creator-1',
      },
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
      name: 'Activity 2',
      slug: 'activity-2',
      place: { id: '1', name: 'Place 1', slug: 'place-1' },
      createdBy: {
        id: '2',
        name: 'Creator 2',
        avatar: 'avatar-2',
        slug: 'creator-2',
      },
      rating: '3.5',
    },
  ];

  // Mocked event handlers
  const likeHandler = jest.fn();
  const addHandler = jest.fn();
  const shareHandler = jest.fn();

  test('renders the activity card group', () => {
    const { container } = render(
      <ActivityCardGroup
        activities={activities}
        likeHandler={likeHandler}
        addHandler={addHandler}
        shareHandler={shareHandler}
      />,
    );

    // Use the `getByRole` query to select the container element
    // and assert its child component count
    const activityCards = container.querySelectorAll('.activity-card');
    expect(activityCards.length).toBe(activities.length);
  });

  test('clicks on the action buttons', () => {
    const { getByTestId } = render(
      <ActivityCardGroup
        activities={[activities[1]]}
        likeHandler={likeHandler}
        addHandler={addHandler}
        shareHandler={shareHandler}
      />,
    );

    const likeBtn = getByTestId('button-element-Likebutton');
    fireEvent.click(likeBtn);
    expect(likeHandler).toHaveBeenCalledTimes(1);
    const addBtn = getByTestId('button-element-Addbutton');
    fireEvent.click(addBtn);
    expect(addHandler).toHaveBeenCalledTimes(1);
    const shareBtn = getByTestId('button-element-Sharebutton');
    fireEvent.click(shareBtn);
    expect(shareHandler).toHaveBeenCalledTimes(1);
  });
});
