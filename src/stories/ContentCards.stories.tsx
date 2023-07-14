import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import ContentCard from '../components/ContentCard';
import { PlaceCard } from '../components/ContentCard/PlaceCard';
import { ActivityCard } from '../components/ContentCard/ActivityCard';
import { TripCard } from '../components/ContentCard/TripCard';
import { ExplorerCard } from '../components/ContentCard/ExplorerCard';
import { CategoryCard } from '../components/ContentCard/CategoryCard';

/** Assets */
import mtnLakesWebp from './images/mountains_lake.webp';
import mtnLakesPng from './images/mountains_lake.png';
import mtnLakesJpeg from './images/mountains_lake.jpeg';
import trailRunningJpeg from './images/Ready-set-trail-How-to-prepare-for-trail-running-small.jpeg';
import lakeHaiyahaJpeg from './images/lake_haiyaha.jpeg';
import jane1Jpeg from './images/avatar-jane-1.jpeg';
import jane2Jpeg from './images/avatar-jane-2.jpeg';
import jane3Jpeg from './images/avatar-jane-3.jpeg';

export default {
  title: 'Components/Content Cards',
  component: ContentCard,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem] w-[30rem] h-[35rem] flex justify-center pt-12">
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
    srcSet: mtnLakesWebp,
  },
  {
    type: 'image/png',
    srcSet: mtnLakesPng,
  },
];

const imagePropsPlace = {
  sources: imgSourcesPlace,
  src: mtnLakesJpeg,
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
  src: lakeHaiyahaJpeg,
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
      createdBySrc={jane1Jpeg}
      createdByLink="/explorer/@jane-doe"
      rating="4.5"
    />
  ),
};

const imagePropsTrip = {
  sources: [],
  src: trailRunningJpeg,
  alt: 'Trail running at RMNP',
  className: '',
};

const avatarProps = [
  {
    src: jane1Jpeg as string,
    alt: 'Jane Doe',
  },
  {
    src: jane2Jpeg as string,
    alt: 'face2',
  },
  {
    src: jane3Jpeg as string,
    alt: 'face3',
  },
  {
    src: jane2Jpeg as string,
    alt: 'face2',
  },
  {
    src: jane3Jpeg as string,
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

export const Explorer: Story = {
  name: 'Explorer Card',
  render: () => (
    <ExplorerCard
      src={jane3Jpeg}
      name="Jane Doe"
      profileLink="/explorer/@jane-doe"
      explorerLocation="Colorado, USA"
      locationLink="/places/colorado"
      numTrips={5}
      followHandler={() => alert('You clicked follow!')}
    />
  ),
};

const imagePropsCategory = {
  sources: [],
  src: trailRunningJpeg,
  alt: 'Trail running at RMNP',
  className: '',
};

export const Category: Story = {
  name: 'Category Card',
  render: () => (
    <CategoryCard
      imageProps={imagePropsCategory}
      heading="Trail running"
      href="/activities/trail-running"
      mediaType={'image'}
    />
  ),
};
