import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { ResponsiveImage, ImageSource } from '../components/ResponsiveImage';

/** Assets */
import mountainsLakeJpeg from './images/mountains_lake.jpeg';
// import mountainsLakeAvif from './images/mountains_lake.avif';
import mountainsLakePng from './images/mountains_lake.png';
import mountainsLakeWebp from './images/mountains_lake.webp';

export default {
  title: 'Components/ResponsiveImage',
  component: ResponsiveImage,
  decorators: [
    (story) => <div className="bg-travvit-orange/10">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {
  args: {
    src: mountainsLakeJpeg,
    alt: 'Moutains and lakes',
  },
};

const imgSources: ImageSource[] = [
  {
    type: 'image/webp',
    srcset: mountainsLakeWebp,
  },
  {
    type: 'image/png',
    srcset: mountainsLakePng,
  },
];

export const MultipleImages: Story = {
  args: {
    sources: imgSources,
    src: mountainsLakeJpeg,
    alt: 'Moutains and lakes',
  },
};
