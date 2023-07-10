import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { NotFoundPage } from '../components/404/404';

/** Assets */
import backgroundImg1 from './images/jaanus-jagomagi-night-1200.jpeg';
import backgroundImg2 from './images/austin-crow-desert-large.jpeg';
import backgroundImg3 from './images/jaanus-jagomagi-1200.jpeg';
import backgroundImg4 from './images/laura-chouette-lake-large.jpeg';
import backgroundImg5 from './images/laura-chouette-lake-large.webp';

export default {
  title: 'Components/Page not found',
  component: NotFoundPage,
  // decorators: [
  //   (story) => <div className="bg-travvit-orange/10 h-screen">{story()}</div>,
  // ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Backgournd1: Story = {
  args: {
    imageProps: {
      sources: [
        {
          type: 'image/jpeg',
          srcSet: backgroundImg1,
        },
      ],
      src: backgroundImg1,
      alt: 'Dessert at night',
    },
  },
};

export const Backgournd2: Story = {
  args: {
    imageProps: {
      sources: [
        {
          type: 'image/jpeg',
          srcSet: backgroundImg2,
        },
      ],
      src: backgroundImg2,
      alt: 'Dessert at daytime',
    },
  },
};

export const Backgournd3: Story = {
  args: {
    imageProps: {
      sources: [
        {
          type: 'image/jpeg',
          srcSet: backgroundImg3,
        },
      ],
      src: backgroundImg3,
      alt: 'Driving through the mountains',
    },
    className: 'text-slate-900 drop-shadow-lg',
  },
};

export const Backgournd4: Story = {
  args: {
    imageProps: {
      sources: [
        {
          type: 'image/jpeg',
          srcSet: backgroundImg4,
        },
      ],
      src: backgroundImg3,
      alt: 'Mountain lake',
    },
  },
};

const imageProps5 = {
  sources: [
    {
      type: 'image/jpeg',
      srcSet: backgroundImg4,
    },
    {
      type: 'image/webp',
      srcSet: backgroundImg5,
    },
  ],
  src: backgroundImg4,
  alt: 'Moutains and lakes',
};

export const Backgournd5: Story = {
  name: 'Multiple media types',
  args: {
    imageProps: imageProps5,
  },
};
