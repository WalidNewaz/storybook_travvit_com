import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Card } from '../components/Card/Card';
import { ImageCard } from '../components/ImageCard/ImageCard';
import { Button } from '../components/Button/Button';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import zion from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-2225083_960_720.jpeg';

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
          <div className="relative">
            <ImageCard
              src={mountainsLake}
              alt="Mountains and lake"
              containerClasses="rounded-none absolute top-0 left-0 z-0"
            />
            <ImageCard
              src={zion}
              alt="Zion National Park"
              containerClasses="rounded-none absolute top-28 left-16 z-1"
            />
            <ImageCard
              src={ynp}
              alt="Yellowstone National Park"
              containerClasses="rounded-none absolute top-14 left-32 z-2"
            />
          </div>
        )}
        Content2={() => (
          <article className="flex flex-col justify-center">
            <h2 className="text-3xl capitalize mb-6">Discover new places</h2>
            <p className="mb-6">
              Explore breathtaking destinations and embark on unforgettable
              adventures
            </p>
            <Button
              label="Explore"
              size="small"
              onClick={() => {
                console.log('You clicked me!');
              }}
              buttonClasses="w-fit self-center"
              primary
            />
          </article>
        )}
        cardClasses="h-5/6"
        contentClasses2="md:text-center"
      />
    </div>
  ),
};
