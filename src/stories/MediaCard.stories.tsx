import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { MediaCard } from '../components/MediaCard';
import HeadingButtonActionLayer from '../components/MediaCard/HeadingButtonActionLayer';
import LinkHeadingActionLayer from '../components/MediaCard/LinkHeadingActionLayer';
import LinkTransparentActionLayer from '../components/MediaCard/LinkTransparentActionLayer';
import SocialCategoryActionLayer from '../components/MediaCard/SocialCategoryActionLayer';

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

const imgSources = [
  {
    type: 'image/webp',
    srcSet: mountainsLakeWebp,
  },
  {
    type: 'image/png',
    srcSet: mountainsLakePng,
  },
];

const imageProps = {
  sources: imgSources,
  src: mountainsLake,
  alt: 'Moutains and lakes',
  className: 'rounded-3xl',
};

export const Image: Story = {
  name: 'Image Card',
  render: () => (
    <MediaCard
      imageProps={imageProps}
      mediaType="image"
      actionLayer={
        <HeadingButtonActionLayer
          heading="USA Trip Planner: Design Your Perfect Vacation"
          label="Explore"
          onClick={() => {
            console.log('You clicked me!');
          }}
        />
      }
      mediaStyle={{ height: '90vh' }}
    />
  ),
};

const videoSources = [
  { src: womanWebm, type: 'video/webm' },
  { src: womanMp4, type: 'video/mp4' },
];

const videoProps = {
  sources: videoSources,
  requiredMediaType: 'video/webm',
  controls: true,
  autoPlay: true,
  className: 'rounded-3xl',
};

export const Video: Story = {
  name: 'Video Card',
  render: () => (
    <MediaCard
      videoProps={videoProps}
      mediaType="video"
      actionLayer={
        <HeadingButtonActionLayer
          heading="USA Trip Planner: Design Your Perfect Vacation"
          label="Explore"
          onClick={() => {
            console.log('You clicked me!');
          }}
        />
      }
    />
  ),
};

export const HeadingButtonAction: Story = {
  name: 'Action Layer/Heading Button',
  render: () => (
    <div className="w-60 h-60 bg-slate-600 relative rounded-2xl">
      <HeadingButtonActionLayer
        heading="USA Trip Planner: Design Your Perfect Vacation"
        label="Explore"
        onClick={() => {
          console.log('You clicked me!');
        }}
      />
    </div>
  ),
};

export const LinkHeadingAction: Story = {
  name: 'Action Layer/Link Heading',
  render: () => (
    <div className="w-60 h-60 bg-slate-600 relative rounded-2xl">
      <LinkHeadingActionLayer
        heading="USA Trip Planner"
        href="/"
        className=""
      />
    </div>
  ),
};

export const LinkTransparentAction: Story = {
  name: 'Action Layer/Link Transparent',
  render: () => (
    <div className="w-60 h-60 bg-slate-600 relative rounded-2xl">
      <LinkTransparentActionLayer href="/" />
    </div>
  ),
};

export const SocialCategoryAction: Story = {
  name: 'Action Layer/Social Category',
  render: () => (
    <div className="w-60 h-60 bg-slate-50 relative rounded-2xl">
      <SocialCategoryActionLayer
        badges={['Hike', 'National Park']}
        likeHandler={() => alert('You clicked like!')}
        addHandler={() => alert('You clicked add!')}
        shareHandler={() => alert('You clicked share!')}
      />
    </div>
  ),
};
