import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { ActivityCard } from '../components/ContentCard/ActivityCard';
import { CategoryCard } from '../components/ContentCard/CategoryCard';
import { IconButton } from '../components/IconButton/IconButton';
import {
  FaPersonHiking,
  FaCampground,
  FaPersonSkiing,
  FaPersonRunning,
} from 'react-icons/fa6';
import { GiMountainClimbing } from 'react-icons/gi';
import { MdDirectionsBike, MdOutlineSailing } from 'react-icons/md';

/** Services */
import PlacesService from './mocks/places.service';

/** Assets */
import { menuItems } from './mocks/menuItems';
import hikingImgJpeg from './images/hennadii-hryshyn-hiking-lg.jpeg';
import face1 from './images/avatar-jane-1.jpeg';

export default {
  title: 'Pages/Activities',
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

/** Setup */
const placesService = new PlacesService();

const ActivitiesButtons: React.FC = () => (
  <>
    <IconButton
      className="flex m-2"
      label="Hiking"
      icon={<FaPersonHiking className="w-6 h-6" aria-hidden="true" />}
    />
    <IconButton
      className="flex m-2"
      label="Climbing"
      icon={<GiMountainClimbing className="w-6 h-6" aria-hidden="true" />}
    />
    <IconButton
      className="flex m-2"
      label="Camping"
      icon={<FaCampground className="w-6 h-6" aria-hidden="true" />}
    />
    <IconButton
      className="flex m-2"
      label="Skiing"
      icon={<FaPersonSkiing className="w-6 h-6" aria-hidden="true" />}
    />
    <IconButton
      className="flex m-2"
      label="Mtn Biking"
      icon={<MdDirectionsBike className="w-6 h-6" aria-hidden="true" />}
    />
    <IconButton
      className="flex m-2"
      label="Running"
      icon={<FaPersonRunning className="w-6 h-6" aria-hidden="true" />}
    />
  </>
);

// const PopularActivities: React.FC = () => {};

const imagePropsHiking = {
  sources: [],
  src: 'hennadii-hryshyn-hiking-lg.jpeg',
  alt: 'Hiking',
  className: '',
};

const imagePropsClimbing = {
  sources: [],
  src: 'fionn-claydon-climbing-lg.jpeg',
  alt: 'Climbing',
  className: '',
};

const imagePropsCamping = {
  sources: [],
  src: 'patrick-hendry-camping-lg.jpeg',
  alt: 'Camping',
  className: '',
};

const imagePropsMtb = {
  sources: [],
  src: 'axel-brunst-mtn-biking.jpeg',
  alt: 'MTB',
  className: '',
};

const imagePropsActivity = {
  sources: [],
  src: 'lake_haiyaha.jpeg',
  alt: 'Moutains and lakes',
  className: '',
};

const ActivitiesPage: React.FC = () => {
  return (
    <main className="page-activities">
      <h1 className="section-header">All Activities</h1>
      <section className={`all-activities flex flex-wrap`}>
        <ActivitiesButtons />
      </section>
      <h1 className="section-header">Popular Activities</h1>
      <section className={`popular-activities category-group`}>
        <CategoryCard
          imageProps={imagePropsHiking}
          heading="Hiking"
          href="/activities/hiking"
          mediaType="image"
        />
        <CategoryCard
          imageProps={imagePropsClimbing}
          heading="Climbing"
          href="/activities/climbing"
          mediaType="image"
        />
        <CategoryCard
          imageProps={imagePropsCamping}
          heading="Camping"
          href="/activities/camping"
          mediaType="image"
        />
        <CategoryCard
          imageProps={imagePropsMtb}
          heading="MTB"
          href="/activities/mtb"
          mediaType="image"
        />
      </section>
      <h1 className="section-header">Activities Near Me (25)</h1>
      <section className={`activities-nearby places-group`}>
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
          createdBySrc={'avatar-jane-1.jpeg'}
          createdByLink="/explorer/@jane-doe"
          rating="4.5"
        />
      </section>
    </main>
  );
};

export const Activities: Story = {
  name: 'Activities',
  render: () => <ActivitiesPage />,
};
