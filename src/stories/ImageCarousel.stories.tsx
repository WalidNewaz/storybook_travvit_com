import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { ImageCarousel } from '../components/ImageCarousel';
import { ImageCard } from '../components/ImageCard/ImageCard';

/** Assets */
import face1 from './images/img_7.jpeg';
import face2 from './images/img_10.jpeg';
import face3 from './images/img_30.jpeg';
import face4 from './images/timothy-paul-smith-256424.jpeg';

import bcnp from './images/BryceCanyon-Amphiteatre1.jpeg';
import gcnp from './images/GCNP-3.jpeg';
import rmnp from './images/RMNP-2.jpeg';
import znp from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-2225083_960_720.jpeg';

export default {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
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

const parks = [
  {
    src: bcnp as string,
    alt: 'Bryce Canyon National Park',
  },
  {
    src: gcnp as string,
    alt: 'Grand Canyon National Park',
  },
  {
    src: rmnp as string,
    alt: 'Rocky Mountain National Park',
  },
  {
    src: znp as string,
    alt: 'Zion National Park',
  },
  {
    src: ynp as string,
    alt: 'Yellowstone National Park',
  },
];

export const Faces: Story = {
  name: 'Faces',
  args: {
    images,
    ImageCardComponent: ImageCard,
  },
};

export const Parks: Story = {
  ...Faces,
  name: 'Places',
  args: {
    ...Faces.args,
    images: parks,
  },
};
