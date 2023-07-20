import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useSelector } from 'react-redux';

import { Mockstore, mockedState } from './mocks/store';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/Header/Header';
import { CategoryCard } from '../components/ContentCard/CategoryCard/CategoryCard';
import { IconButton } from '../components/IconButton/IconButton';
import {
  FaPersonHiking,
  FaCampground,
  FaPersonSkiing,
  FaPersonRunning,
} from 'react-icons/fa6';
import { GiMountainClimbing } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { ActivityCardGroup } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup';
import { ActivitySummaryType } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';

import ActivitiesService from './mocks/activities.service';

/** Assets */
import { menuItems } from './mocks/menuItems';
import hikingImgJpeg from './images/hennadii-hryshyn-hiking-lg.jpeg';
import climbingImgJpeg from './images/fionn-claydon-climbing-lg.jpeg';
import campingImgJpeg from './images/patrick-hendry-camping-lg.jpeg';
import bikingImgJpeg from './images/axel-brunst-mtn-biking.jpeg';

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

const activitiesService = new ActivitiesService();

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

const imagePropsHiking = {
  sources: [],
  src: hikingImgJpeg,
  alt: 'Hiking',
  className: '',
};

const imagePropsClimbing = {
  sources: [],
  src: climbingImgJpeg,
  alt: 'Climbing',
  className: '',
};

const imagePropsCamping = {
  sources: [],
  src: campingImgJpeg,
  alt: 'Camping',
  className: '',
};

const imagePropsMtb = {
  sources: [],
  src: bikingImgJpeg,
  alt: 'MTB',
  className: '',
};

const ActivitiesPage: React.FC = () => {
  const [nearbyActivities, setNearbyActivities] = useState<
    ActivitySummaryType[] | null
  >(null);
  const [loading, setLoading] = useState(false);

  const {
    activities,
  }: {
    activities: ActivitySummaryType[];
  } = useSelector((state: any) => state.activities);

  useEffect(() => {
    console.log(activities);
    const fetchNearbyActivities = async () => {
      // const activities = loadNearbyActivitiesFromRedux();
      const result = await activitiesService.getActivitiesNearMe();
      setNearbyActivities(result);
    };
    if (activities.length === 0) {
      fetchNearbyActivities();
    }
  }, []);

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
      <h1 className="section-header">
        Activities Near Me ({activities?.length})
      </h1>
      <section className={`activities-nearby places-group`}>
        {activities && (
          <ActivityCardGroup
            activities={activities}
            likeHandler={(data) => alert(`Your are about to like: ${data}!`)}
            addHandler={(data) =>
              alert(`You are adding ${data} to your wishlist.`)
            }
            shareHandler={(data) =>
              alert(`You are about to share ${data} with others.`)
            }
          />
        )}
      </section>
    </main>
  );
};

export const Activities: Story = {
  name: 'Activities',
  render: () => <ActivitiesPage />,
  decorators: [
    (story) => (
      <Mockstore ActivitiesPageData={mockedState}>{story()}</Mockstore>
    ),
  ],
};
