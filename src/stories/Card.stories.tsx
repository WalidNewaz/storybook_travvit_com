import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Card } from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const Cards: Story = {
  render: () => (
    <div>
      <Card
        title="Card 1"
        content1="Lorem ipsum dolor sit amet."
        content2="Lorem ipsum dolor sit amet."
      />
      <Card
        title="Card 2"
        content1="Lorem ipsum dolor sit amet."
        content2="Lorem ipsum dolor sit amet."
      />
      <Card
        title="Card 3"
        content1="Lorem ipsum dolor sit amet."
        content2="Lorem ipsum dolor sit amet."
      />
      <Card
        title="Card 4"
        content1="Lorem ipsum dolor sit amet."
        content2="Lorem ipsum dolor sit amet."
      />
    </div>
  ),
};
