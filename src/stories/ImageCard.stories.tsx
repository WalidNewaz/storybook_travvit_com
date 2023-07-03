import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { ImageCard } from '../components/ImageCard/ImageCard';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ImageCard>;

export const RoundedLarge: Story = {
  name: 'Rounded radius (large)',
  args: {
    src: mountainsLake,
    alt: 'Mountains and lake',
    containerClassName: 'rounded-lg',
  },
};

export const NoRouding: Story = {
  name: 'Square (no rounding)',
  args: {
    src: mountainsLake,
    alt: 'Mountains and lake',
    containerClassName: 'rounded-none',
  },
};
