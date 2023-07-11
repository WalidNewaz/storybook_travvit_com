import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { MediaCard } from '../components/MediaCard';
import { PlaceCard } from '../components/PlaceCard';

export default {
  title: 'Components/Content Cards',
  component: MediaCard,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MediaCard>;

export const Place: Story = {
  name: 'Place Card',
  render: () => <PlaceCard />,
};
