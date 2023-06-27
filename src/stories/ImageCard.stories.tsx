import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { ImageCard } from '../components/ImageCard/ImageCard';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
} as Meta;

type Story = StoryObj<typeof ImageCard>;

export const Primary: Story = {
  name: 'Primary representation',
  args: {
    src: mountainsLake,
    alt: 'Mountains and lake',
    borderRadius: 'large',
  },
};
