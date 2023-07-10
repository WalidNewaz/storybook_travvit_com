import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { ResponsiveVideo } from '../components/ResponsiveVideo';

/** Assets */
import flower from './video/flower.webm';
import womanMp4 from './video/woman-lake-1080p.mp4';
import womanWebm from './video/woman-lake-1080p.webm';

const sources = [{ src: flower, type: 'video/webm' }];

export default {
  title: 'Components/ResponsiveVideo',
  component: ResponsiveVideo,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ResponsiveVideo>;

export const NoVideo: Story = {};

export const WithWebmVideo: Story = {
  render: () => (
    <ResponsiveVideo
      sources={sources}
      requiredMediaType="video/webm"
      controls
      className="rounded-3xl"
    />
  ),
};

export const WithMp4Video: Story = {
  render: () => (
    <ResponsiveVideo
      sources={[
        { src: womanWebm, type: 'video/webm' },
        { src: womanMp4, type: 'video/mp4' },
      ]}
      requiredMediaType="video/mp4"
      autoPlay
      controls
    />
  ),
};
