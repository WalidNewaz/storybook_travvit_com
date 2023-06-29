import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Card } from '../components/Card/Card';
import { ImageCard } from '../components/ImageCard/ImageCard';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const Cards: Story = {
  render: () => (
    <div>
      <Card
        Content1={() => (
          <ImageCard
            src={mountainsLake}
            alt="Mountains and lake"
            containerClasses="rounded-none"
          />
        )}
        Content2={() => <p>This is a lot of work</p>}
      />
    </div>
  ),
};
