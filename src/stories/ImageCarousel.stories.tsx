import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { ImageCarousel } from '../components/ImageCarousel';

/** Assets */
import face1 from './images/img_7.jpeg';
import face2 from './images/img_10.jpeg';
import face3 from './images/img_30.jpeg';
import face4 from './images/timothy-paul-smith-256424.jpeg';

export default {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
} as Meta;

type Story = StoryObj<typeof ImageCarousel>;

const images = [
  face1 as string,
  face2 as string,
  face3 as string,
  face4 as string,
];

export const Primary: Story = {
  name: 'Medium',
  args: {
    images,
  },
};
