import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Card } from '../components/Card/Card';
import { ImageCard } from '../components/ImageCard/ImageCard';
import { Button } from '../components/Button/Button';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { HeroSlider } from '../components/HeroSlider/HeroSlider';
import { MediaCard } from '../components/MediaCard/';
import type { MediaTypes } from '../components/HeroSlider/HeroSlider';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import zion from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-2225083_960_720.jpeg';
import sevenHikes from './images/seven-amazing-hikes.webp';
import backpack from './images/first-backpacking-trip.webp';
import trailRunner from './images/Ready-set-trail-How-to-prepare-for-trail-running-small.jpeg';
import rockClimbing from './images/rock-climbing.jpeg';
import camping from './images/Camping.jpeg';

import { menuItems } from './mocks/menuItems';

export default {
  title: 'Pages/Travvit Home Page',
  component: FullPageScroll,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem]">{story()}</div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof FullPageScroll>;

const HOME_PAGE_CARD_IMG_CLASSES = `rounded-xl absolute xs:w-[200px] xs:h-[200px] lg:w-80 lg:h-80`;
const DESC_CLASSES =
  'xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:px-16 capitalize mb-6';

const storySlides = [
  {
    media: camping as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Camping by a lake',
    description: 'Plan your next getaway in the great outdoors',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: rockClimbing as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Rock climbing',
    description: 'Reach new hights with rock climbing',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: ynp as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Yellowstone National Park',
    description: 'Explore the great American National Parks',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
];

export const TwoCards: Story = {
  name: 'Two cards',
  render: () => (
    <FullPageScroll>
      <div className="mt-8">
        <TravvitHeader menuItems={menuItems} />
      </div>
      <HeroSlider
        slides={storySlides}
        SlideComponent={MediaCard}
        containerClasses="max-w-full mt-6 mb-16 relative"
        containerStyle={{ height: '87vh' }}
        descriptionClasses={DESC_CLASSES}
        slideContainerClasses="max-w-[80rem]"
        mediaStyle={{ height: '90vh' }}
      />
      <Card
        header={() => (
          <div className="relative h-80 w-80">
            <ImageCard
              src={mountainsLake}
              alt="Mountains and lake"
              containerClassName={`${HOME_PAGE_CARD_IMG_CLASSES} top-0 left-0 z-0 m-2 lg:h-80 lg:-top-40 md:-top-8 md:left-4 xs:-top-8 xs:left-4`}
            />
            <ImageCard
              src={zion}
              alt="Zion National Park"
              containerClassName={`${HOME_PAGE_CARD_IMG_CLASSES} top-28 left-16 z-1 lg:top-0 lg:left-20 md:top-20 md:left-20 xs:top-20 xs:left-20`}
            />
            <ImageCard
              src={ynp}
              alt="Yellowstone National Park"
              containerClassName={`${HOME_PAGE_CARD_IMG_CLASSES} top-16 left-32 z-2 lg:-top-20 lg:left-40 md:top-6 md:left-36 xs:top-8 xs:left-32`}
            />
          </div>
        )}
        body={() => (
          <article className="flex flex-col justify-center p-4">
            <h2 className="text-3xl capitalize mb-6 regular-text">
              Discover new places
            </h2>
            <p className="mb-6 regular-text">
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
        cardClasses="xs:p-1 xs:mt-8 md:mt-1.5 lg:mt-8"
        cardStyle={{ height: '87vh', marginBottom: '10vh' }}
        headerClasses="flex-col justify-center xs:h-1/2 md:h-screen"
        bodyClasses="xs:h-1/2 md:text-center md:h-screen"
      />
      <Card
        header={() => (
          <article className="flex flex-col justify-center p-4">
            <h2 className="text-3xl capitalize mb-6 regular-text">
              Discover new activities
            </h2>
            <p className="mb-6 regular-text">
              Unleash your adventurous spirit with thrilling outdoor activities
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
        body={() => (
          <div className="relative h-80 w-full px-4">
            <ImageCard
              src={sevenHikes}
              alt="Seven amazing hikes"
              containerClassName={`w-full rounded-2xl`}
            />
          </div>
        )}
        cardClasses="xs:p-1 xs:mt-8 md:mt-1.5 lg:mt-8"
        cardStyle={{ height: '87vh', marginBottom: '10vh' }}
        headerClasses="xs:h-1/2 md:text-center md:h-screen"
        bodyClasses="flex-col justify-center xs:h-1/2 md:h-screen"
      />
      <Card
        header={() => (
          <div className="relative h-80 w-full px-4">
            <ImageCard
              src={backpack}
              alt="Seven amazing hikes"
              containerClassName={`w-full rounded-2xl`}
            />
          </div>
        )}
        body={() => (
          <article className="flex flex-col justify-center p-4">
            <h2 className="text-3xl capitalize mb-6 regular-text">
              Discover trips that inspire
            </h2>
            <p className="mb-6 regular-text">
              Embark on unforgettable journeys that ignite your wonderlust
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
        cardClasses="xs:p-1 xs:mt-8 md:mt-1.5 lg:mt-8"
        cardStyle={{ height: '87vh', marginBottom: '10vh' }}
        headerClasses="flex-col justify-center xs:h-1/2 md:h-screen"
        bodyClasses="xs:h-1/2 md:text-center md:h-screen"
      />
      <Card
        header={() => (
          <article className="flex flex-col justify-center p-4">
            <h2 className="text-3xl capitalize mb-6 regular-text">
              Discover inspiring explorers
            </h2>
            <p className="mb-6 regular-text">
              Get inspired by passioanate adventurers pushing the boudaries of
              exploration.
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
        body={() => (
          <div className="relative h-80 w-full px-4">
            <ImageCard
              src={trailRunner}
              alt="Seven amazing hikes"
              containerClassName={`w-full rounded-2xl`}
            />
          </div>
        )}
        cardClasses="xs:p-1 xs:mt-8 md:mt-1.5 lg:mt-8"
        cardStyle={{ height: '87vh', marginBottom: '10vh' }}
        headerClasses="xs:h-1/2 md:text-center md:h-screen"
        bodyClasses="flex-col justify-center xs:h-1/2 md:h-screen"
      />
      <TravvitFooter />
    </FullPageScroll>
  ),
};
