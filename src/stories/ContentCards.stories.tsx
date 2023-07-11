import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import ContentCard from '../components/ContentCard';
import { PlaceCard } from '../components/ContentCard/PlaceCard';
import { ActivityCard } from '../components/ContentCard/ActivityCard';
import { TripCard } from '../components/ContentCard/TripCard';
import { ExplorerCard } from '../components/ContentCard/ExplorerCard';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import mountainsLakePng from './images/mountains_lake.png';
import mountainsLakeWebp from './images/mountains_lake.webp';
import lakeHaiyaha from './images/lake_haiyaha.jpeg';
import trailRun from './images/Ready-set-trail-How-to-prepare-for-trail-running-small.jpeg';
import face1 from './images/img_7.jpeg';
import face2 from './images/img_10.jpeg';
import face3 from './images/img_30.jpeg';

export default {
  title: 'Components/Content Cards',
  component: ContentCard,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem] w-[30rem] h-[35rem] flex justify-center pt-8">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ContentCard>;

const imgSourcesPlace = [
  {
    type: 'image/webp',
    srcSet: mountainsLakeWebp,
  },
  {
    type: 'image/png',
    srcSet: mountainsLakePng,
  },
];

const imagePropsPlace = {
  sources: imgSourcesPlace,
  src: mountainsLake,
  alt: 'Moutains and lakes',
  className: '',
};

export const Place: Story = {
  name: 'Place Card',
  render: () => (
    <PlaceCard
      mediaType="image"
      imageProps={imagePropsPlace}
      likeHandler={() => alert('You clicked like!')}
      addHandler={() => alert('You clicked add!')}
      shareHandler={() => alert('You clicked share!')}
      badges={['Hiking', 'Fishing', 'National Park']}
      heading="Rocky Mountain National Park"
      headingLink="#"
      subHeading="Colorado, USA"
      subHeadingLink="#"
      rating="4.9"
    />
  ),
};

const imagePropsActivity = {
  sources: [],
  src: lakeHaiyaha,
  alt: 'Moutains and lakes',
  className: '',
};

export const Activity: Story = {
  name: 'Activity Card',
  render: () => (
    <ActivityCard
      mediaType="image"
      imageProps={imagePropsActivity}
      likeHandler={() => alert('You clicked like!')}
      addHandler={() => alert('You clicked add!')}
      shareHandler={() => alert('You clicked share!')}
      badges={['Hiking', 'Moderate']}
      heading="Lake Haiyaha Hike"
      headingLink="#"
      subHeading="Rocky Mountain National Park"
      subHeadingLink="#"
      createdBy="Jane Doe"
      createdBySrc={face1}
      createdByLink="/explorer/@jane-doe"
      rating="4.5"
    />
  ),
};

const imagePropsTrip = {
  sources: [],
  src: trailRun,
  alt: 'Trail running at RMNP',
  className: '',
};

const avatarProps = [
  {
    src: face1 as string,
    alt: 'face1',
  },
  {
    src: face2 as string,
    alt: 'face2',
  },
  {
    src: face3 as string,
    alt: 'face3',
  },
  {
    src: face2 as string,
    alt: 'face2',
  },
  {
    src: face3 as string,
    alt: 'face3',
  },
];

export const Trip: Story = {
  name: 'Trip Card',
  render: () => (
    <TripCard
      mediaType="image"
      imageProps={imagePropsTrip}
      likeHandler={() => alert('You clicked like!')}
      addHandler={() => alert('You clicked add!')}
      shareHandler={() => alert('You clicked share!')}
      badges={['Trail Running', 'Difficult']}
      startTime="Tue Jul 11, 2023, 6:30 PM MDT"
      heading="Trail running at RMNP"
      headingLink="#"
      subHeading="Rocky Mountain National Park"
      subHeadingLink="#"
      groupMembers={avatarProps}
      joinHandler={() => alert('You clicked join!')}
      followHandler={() => alert('You clicked follow!')}
    />
  ),
};

const imagePropsExplorer = {
  sources: [],
  src: lakeHaiyaha,
  alt: 'Moutains and lakes',
  className: '',
};

export const Explorer: Story = {
  name: 'Explorer Card',
  render: () => (
    <ExplorerCard
      src={face3}
      name="Jane Doe"
      profileLink="/explorer/@jane-doe"
      explorerLocation="Colorado, USA"
      locationLink="/places/colorado"
      numTrips={5}
      followHandler={() => alert('You clicked follow!')}
    />
  ),
};
