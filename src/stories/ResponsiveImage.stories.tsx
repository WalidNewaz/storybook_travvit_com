import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { ResponsiveImage, ImageSource } from '../components/ResponsiveImage';

/** Assets */
import mountainsLakeJpeg from './images/mountains_lake.jpeg';
// import mountainsLakeAvif from './images/mountains_lake.avif';
// import mountainsLakePng from './images/mountains_lake.png';
import mountainsLakeWebp from './images/mountains_lake.webp';

export default {
  title: 'Components/ResponsiveImage',
  component: ResponsiveImage,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {
  args: {
    src: mountainsLakeJpeg,
    alt: 'Moutains and lakes',
    className: 'rounded-3xl',
  },
};

const imgSources: ImageSource[] = [
  {
    type: 'image/webp',
    srcSet: mountainsLakeWebp,
  },
  // {
  //   type: 'image/png',
  //   srcSet: mountainsLakePng,
  // },
];

export const MultipleImages: Story = {
  args: {
    sources: imgSources,
    src: mountainsLakeJpeg,
    alt: 'Moutains and lakes',
    className: 'rounded-3xl',
  },
};
