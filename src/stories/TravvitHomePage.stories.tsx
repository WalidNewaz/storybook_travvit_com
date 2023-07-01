import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Card } from '../components/Card/Card';
import { ImageCard } from '../components/ImageCard/ImageCard';
import { Button } from '../components/Button/Button';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import zion from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-2225083_960_720.jpeg';

export default {
  title: 'Components/TravvitHomePage',
  component: FullPageScroll,
  decorators: [(story) => <div className="bg-[#FE9600]/10">{story()}</div>],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof FullPageScroll>;

export const TwoCards: Story = {
  name: 'Two cards',
  render: () => (
    <FullPageScroll>
      <Card
        Content1={() => (
          <div className="relative h-80 w-80">
            <ImageCard
              src={mountainsLake}
              alt="Mountains and lake"
              containerClasses="rounded-xl absolute top-0 left-0 z-0 m-2 xs:w-52 xs:h-52 lg:w-80 lg:h-80 lg:-top-40 md:-top-8 md:left-4 xs:-top-8 xs:left-4"
            />
            <ImageCard
              src={zion}
              alt="Zion National Park"
              containerClasses="rounded-xl absolute top-28 left-16 z-1 xs:w-52 xs:h-52 lg:w-80 lg:h-80 lg:top-0 lg:left-20 md:top-20 md:left-20 xs:top-20 xs:left-20"
            />
            <ImageCard
              src={ynp}
              alt="Yellowstone National Park"
              containerClasses="rounded-xl absolute top-16 left-32 z-2 xs:w-52 xs:h-52 lg:w-80 lg:h-80 lg:-top-20 lg:left-40 md:top-6 md:left-36 xs:top-8 xs:left-32"
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
        cardClasses="xs:p-1 xs:mt-8 md:mt-1.5 lg:mt-8 bg-transparent"
        cardStyle={{ height: '87vh', marginBottom: '10vh' }}
        contentClasses1="flex-col justify-center xs:h-1/2 md:h-screen"
        contentClasses2="xs:h-1/2 md:text-center md:h-screen"
      />
      <Card
        Content1={() => (
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
            />
          </article>
        )}
        Content2={() => (
          <div className="relative h-80 w-80">
            <ImageCard
              src={mountainsLake}
              alt="Mountains and lake"
              containerClasses="rounded-xl absolute top-0 left-0 z-0 m-2 xs:w-52 xs:h-52 lg:w-80 lg:h-80 lg:-top-40 md:-top-8 md:left-4 xs:-top-8 xs:left-4"
            />
            <ImageCard
              src={zion}
              alt="Zion National Park"
              containerClasses="rounded-xl absolute top-28 left-16 z-1 xs:w-52 xs:h-52 lg:w-80 lg:h-80 lg:top-0 lg:left-20 md:top-20 md:left-20 xs:top-20 xs:left-20"
            />
            <ImageCard
              src={ynp}
              alt="Yellowstone National Park"
              containerClasses="rounded-xl absolute top-16 left-32 z-2 xs:w-52 xs:h-52 lg:w-80 lg:h-80 lg:-top-20 lg:left-40 md:top-6 md:left-36 xs:top-8 xs:left-32"
            />
          </div>
        )}
        cardClasses="xs:p-1 xs:mt-8 md:mt-1.5 lg:mt-8 bg-transparent"
        cardStyle={{ height: '87vh', marginBottom: '10vh' }}
        contentClasses1="xs:h-1/2 md:text-center md:h-screen"
        contentClasses2="flex-col justify-center xs:h-1/2 md:h-screen"
      />
      <TravvitFooter />
    </FullPageScroll>
  ),
};
