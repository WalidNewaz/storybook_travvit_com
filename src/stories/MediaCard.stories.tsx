import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { MediaCard } from '../components/MediaCard/MediaCard';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import zion from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-2225083_960_720.jpeg';

export default {
  title: 'Components/Media Card',
  component: MediaCard,
  decorators: [
    (story) => <div className="bg-travvit-orange/10">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MediaCard>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <MediaCard
      media={mountainsLake}
      mediaType="image"
      alt="Mountains and lake"
      description="USA Trip Planner: Design Your Perfect Vacation"
      buttonText="Explore"
      buttonOnClick={() => undefined}
    />
  ),
};
