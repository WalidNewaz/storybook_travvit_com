import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Mockstore, mockedState } from './mocks/store';

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
import { ActivityCardGroup } from '../components/ContentCardGroup/ActivityCardGroup';
import { ActivitySummaryType } from '../interfaces';

/** Services */
import PlacesService from './mocks/places.service';
import ActivitiesService from './mocks/activities.service';

/** Assets */
import { menuItems } from './mocks/menuItems';
import hikingImgJpeg from './images/hennadii-hryshyn-hiking-lg.jpeg';
import climbingImgJpeg from './images/fionn-claydon-climbing-lg.jpeg';
import campingImgJpeg from './images/patrick-hendry-camping-lg.jpeg';
import bikingImgJpeg from './images/axel-brunst-mtn-biking.jpeg';
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

const imagePropsActivity = {
  sources: [],
  src: 'lake_haiyaha.jpeg',
  alt: 'Moutains and lakes',
  className: '',
};

const ActivitiesPage: React.FC = () => {
  const [nearbyActivities, setNearbyActivities] = useState<
    ActivitySummaryType[] | null
  >(null);

  useEffect(() => {
    const fetchNearbyActivities = async () => {
      const result = await activitiesService.getActivitiesNearMe();
      setNearbyActivities(result);
    };
    fetchNearbyActivities();
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
        Activities Near Me ({nearbyActivities?.length})
      </h1>
      <section className={`activities-nearby places-group`}>
        {nearbyActivities && (
          <ActivityCardGroup
            // activities={nearbyActivities}
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
