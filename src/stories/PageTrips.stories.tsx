import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { HeroSlider } from '../components/HeroSlider/HeroSlider';

/** Assets */
import { menuItems } from './mocks/menuItems';
import mountainsLake from './images/mountains_lake.jpeg';
import zion from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-np.jpeg';
import incaTrail from './images/inca-trail.jpeg';

export default {
  title: 'Pages/Trips',
  component: FullPageScroll,
  decorators: [
    (story) => (
      <div className="flex w-full">
        <div className="left-column flex-1"></div>
        <div className="middle-column flex-[0_1_92%] max-w-screen-dt_mid mt-8">
          <TravvitHeader menuItems={menuItems} />
          {story()}
          <TravvitFooter />
        </div>
        <div className="right-column flex-1"></div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof FullPageScroll>;

const storySlides = [
  {
    media: mountainsLake,
    alt: 'Mountains and lake',
    description: 'USA Trip Planner: Design Your Perfect Vacation',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: zion,
    mediaType: 'image',
    alt: 'Zion National Park',
    description: 'Come visit Zion National Park in Utah',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: ynp,
    mediaType: 'image',
    alt: 'Yellowstone National Park',
    description: 'Explore Yellowstone National Park',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
];

const TripsPage: React.FC = () => {
  const [notableTrips, setNotableTrips] = useState(null);

  return (
    <HeroSlider
      slides={storySlides}
      containerClasses="max-w-[80rem]"
      containerStyle={{ height: '50vh', marginTop: '2rem' }}
      // mediaStyle={{ height: '90vh' }}
    />
  );
};

export const Trips: Story = {
  name: 'Trips',
  render: () => <TripsPage />,
  // decorators: [
  //   (story) => (
  //     <Mockstore ActivitiesPageData={mockedState}>{story()}</Mockstore>
  //   ),
  // ],
};
