import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { PageLayout } from '../components/PageLayout/PageLayout';
import { ImageCard, RadiusType } from '../components/ImageCard/ImageCard';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import React from 'react';

export default {
  title: 'Components/PageLayout',
  component: PageLayout,
} as Meta;

type Story = StoryObj<typeof PageLayout>;

const imgProps = {
  src: mountainsLake as string,
  alt: 'Mountains and lake',
  borderRadius: '2xl' as RadiusType,
};

export const Primary: Story = {
  render: () => (
    <PageLayout>
      <ImageCard {...imgProps} />
      <ImageCard {...imgProps} />
      <ImageCard {...imgProps} />
      <ImageCard {...imgProps} />
      <ImageCard {...imgProps} />
    </PageLayout>
  ),
};
