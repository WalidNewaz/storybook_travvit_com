import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { ImageCarousel } from '../components/ImageCarousel';
import { ImageCard } from '../components/ImageCard/ImageCard';

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
  {
    src: face1 as string,
    alt: 'face1',
  },
  {
    src: face2 as string,
    alt: 'face2',
  },
  {
    src: face3 as string,
    alt: 'face3',
  },
  {
    src: face4 as string,
    alt: 'face4',
  },
  {
    src: face3 as string,
    alt: 'face3',
  },
];

export const Primary: Story = {
  name: 'Medium',
  args: {
    images,
    ImageCardComponent: ImageCard,
  },
};
