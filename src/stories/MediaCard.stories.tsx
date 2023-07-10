import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { MediaCard } from '../components/MediaCard/MediaCard';
import { ImageSource } from '../components/ResponsiveImage';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import mountainsLakePng from './images/mountains_lake.png';
import mountainsLakeWebp from './images/mountains_lake.webp';

import womanMp4 from './video/woman-lake-1080p.mp4';
import womanWebm from './video/woman-lake-1080p.webm';

export default {
  title: 'Components/Media Card',
  component: MediaCard,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MediaCard>;

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

export const Image: Story = {
  name: 'Image Card',
  render: () => (
    <MediaCard
      imageSources={imgSources}
      src={mountainsLake}
      mediaType="image"
      alt="Mountains and lake"
      description="USA Trip Planner: Design Your Perfect Vacation"
      buttonText="Explore"
      buttonOnClick={() => undefined}
      mediaStyle={{ height: '90vh' }}
      rounded
    />
  ),
};

const videoSources = [
  { src: womanWebm, type: 'video/webm' },
  { src: womanMp4, type: 'video/mp4' },
];

export const Vidoe: Story = {
  name: 'Video Card',
  render: () => (
    <MediaCard
      videoSources={videoSources}
      src={mountainsLake}
      mediaType="video"
      alt="Mountains and lake"
      description="USA Trip Planner: Design Your Perfect Vacation"
      buttonText="Explore"
      buttonOnClick={() => undefined}
      rounded
    />
  ),
};
