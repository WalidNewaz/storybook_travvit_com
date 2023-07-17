/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExplorerCard } from './ExplorerCard';

describe('ExplorerCard', () => {
  it('renders without error', () => {
    render(
      <ExplorerCard
        src="avatar.jpg"
        name="John Doe"
        profileLink="/profile"
        explorerLocation="New York"
        locationLink="/location"
        numTrips={5}
        followHandler={() => {}}
      />,
    );

    const nameElement = screen.getByText('John Doe');
    const locationElement = screen.getByText('New York');
    const numTripsElement = screen.getByText('5 Trips');
    const followButton = screen.getByRole('button', { name: 'Follow' });

    expect(nameElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(numTripsElement).toBeInTheDocument();
    expect(followButton).toBeInTheDocument();
  });

  it('renders without follow button when followHandler is not provided', () => {
    render(
      <ExplorerCard
        src="avatar.jpg"
        name="John Doe"
        profileLink="/profile"
        explorerLocation="New York"
        locationLink="/location"
        numTrips={5}
      />,
    );

    const followButton = screen.queryByRole('button', { name: 'Follow' });

    expect(followButton).toBeNull();
  });

  // Add more test cases as needed
});
