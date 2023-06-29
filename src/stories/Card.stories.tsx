import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Card } from '../components/Card/Card';
import { ImageCard } from '../components/ImageCard/ImageCard';
import { Button } from '../components/Button/Button';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
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
        Content2={() => (
          <article className="flex flex-col justify-center">
            <h2 className="text-3xl capitalize mb-6">Discover new places</h2>
            <p className="mb-6">
              Explore breathtaking destinations and embark on unforgettable
              adventures
            </p>
            <Button
              label="Button"
              size="small"
              onClick={() => {
                console.log('You clicked me!');
              }}
              primary
            />
          </article>
        )}
        contentClasses2="md:text-center"
      />
    </div>
  ),
};
