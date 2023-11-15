import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import ContentCard from '../components/ContentCard/ContentCard';
import { PlaceCard } from '../components/ContentCard/PlaceCard/PlaceCard';
import { ActivityCard } from '../components/ContentCard/ActivityCard/ActivityCard';
import { TripCard } from '../components/ContentCard/TripCard/TripCard';
import { TripActivityCard } from '../components/ContentCard/TripActivityCard/TripActivityCard';
import { ExplorerCard } from '../components/ContentCard/ExplorerCard/ExplorerCard';
import { TripMemberCard } from '../components/ContentCard/TripMemberCard/TripMemberCard';
import { CategoryCard } from '../components/ContentCard/CategoryCard/CategoryCard';

/** Assets */
import mtnLakesWebp from './images/mountains_lake.webp';
// import mtnLakesPng from './images/mountains_lake.png';
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
  // {
  //   type: 'image/png',
  //   srcSet: mtnLakesPng,
  // },
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
      bookmarkHandler={() => alert('You clicked bookmark!')}
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
      bookmarkHandler={() => alert('You clicked bookmark!')}
      badges={['Hiking', 'Moderate']}
      name="Lake Haiyaha Hike"
      slug="#"
      place="Rocky Mountain National Park"
      placeSlug="#"
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
      bookmarkHandler={() => alert('You clicked bookmark!')}
      badges={['Trail Running', 'Difficult', 'Guided']}
      startTime="Tue Jul 11, 2023, 6:30 PM MDT"
      duration={{
        amount: 3,
        unit: 'day',
      }}
      heading="Trail running at RMNP"
      headingLink="#"
      place="Rocky Mountain National Park"
      placeLink="#"
      groupMembers={avatarProps}
      joinHandler={() => alert('You clicked join!')}
    />
  ),
};

export const TripActivity: Story = {
  name: 'Trip Activity Card',
  render: () => (
    <TripActivityCard
      mediaType="image"
      imageProps={imagePropsActivity}
      likeHandler={() => alert('You clicked like!')}
      addHandler={() => alert('You clicked add!')}
      shareHandler={() => alert('You clicked share!')}
      badges={['Hiking', 'Moderate']}
      startTime={new Date().toLocaleString()}
      duration={{
        amount: 3,
        unit: 'day',
      }}
      heading="Lake Haiyaha Hike"
      headingLink="#"
      place="Rocky Mountain National Park"
      placeLink="#"
      groupMembers={avatarProps}
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

export const TripMember: Story = {
  name: 'Trip memner Card',
  render: () => (
    <TripMemberCard
      src={jane3Jpeg}
      name="Jane Doe"
      profileLink="/explorer/@jane-doe"
      explorerLocation="Colorado, USA"
      locationLink="/places/colorado"
      // isLeader={true}
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
