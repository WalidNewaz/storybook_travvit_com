/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TripCard } from './TripCard';
import type { TimeUnit } from '../../../types';

describe('TripCard', () => {
  it('renders without error', () => {
    render(
      <TripCard
        mediaType="image"
        imageProps={{
          sources: [],
          src: 'image.jpg',
          alt: 'Trip Image',
        }}
        bookmarkHandler={() => {}}
        badges={['New', 'Featured']}
        startTime="9:00 AM"
        duration={{
          amount: 2,
          unit: 'hours' as TimeUnit,
        }}
        heading="Trip Name"
        headingLink="/trip"
        place="Trip Location"
        placeLink="/location"
        groupMembers={[
          { src: 'avatar1.jpg', alt: 'Avatar 1' },
          { src: 'avatar2.jpg', alt: 'Avatar 2' },
        ]}
        joinHandler={() => {}}
      />,
    );

    const startTimeElement = screen.getByText('📅 9:00 AM');
    const durationElement = screen.getByText('⏱️ 2 hours');
    const headingElement = screen.getByText('Trip Name');
    const placeElement = screen.getByText('Trip Location');
    const joinButtonElement = screen.getByText('Join');

    expect(startTimeElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(placeElement).toBeInTheDocument();
    expect(joinButtonElement).toBeInTheDocument();
  });

  // Add more test cases as needed
});
