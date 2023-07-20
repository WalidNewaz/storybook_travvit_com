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
import { HeroSlider } from '../components/HeroSlider/HeroSlider';
import type { MediaTypes } from '../components/HeroSlider/HeroSlider';
import ContentRibbon from '../components/ContentRibbon/ContentRibbon';
import {
  FaPersonHiking,
  FaCampground,
  FaPersonSkiing,
  FaPersonRunning,
} from 'react-icons/fa6';
import { GiMountainClimbing, GiFishing } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { ActivityCardGroup } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup';
import { ActivityType } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';

import ActivitiesService from './mocks/activities.service';

/** Assets */
import { menuItems } from './mocks/menuItems';
import hikingImgJpeg from './images/hennadii-hryshyn-hiking-lg.jpeg';
import climbingImgJpeg from './images/fionn-claydon-climbing-lg.jpeg';
import campingImgJpeg from './images/patrick-hendry-camping-lg.jpeg';
import bikingImgJpeg from './images/axel-brunst-mtn-biking.jpeg';
import rockClimbing from './images/rock-climbing.jpeg';
import camping from './images/Camping.jpeg';
import ynp from './images/yellowstone-np.jpeg';

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
  <ContentRibbon>
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
    <IconButton
      className="flex m-2"
      label="Fishing"
      icon={<GiFishing className="w-6 h-6" aria-hidden="true" />}
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
    <IconButton
      className="flex m-2"
      label="Fishing"
      icon={<GiFishing className="w-6 h-6" aria-hidden="true" />}
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
    <IconButton
      className="flex m-2"
      label="Fishing"
      icon={<GiFishing className="w-6 h-6" aria-hidden="true" />}
    />
  </ContentRibbon>
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

const storySlides = [
  {
    media: hikingImgJpeg as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Hiking',
    description: 'Find amazing hikes near you',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: climbingImgJpeg as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Rock climbing',
    description: 'Plan your next climbing trip',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: campingImgJpeg as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Camping',
    description: 'Camp under the stars',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: bikingImgJpeg as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Moutain biking',
    description: 'Feel the rush of the trail',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
];

const ActivitiesHeader: React.FC<{
  selectedActivity: string;
  count: number;
}> = ({ selectedActivity, count }) =>
  selectedActivity ? (
    <h1 className="section-header">
      {selectedActivity} Near Me ({count})
    </h1>
  ) : (
    <h1 className="section-header">Activities Near Me ({count})</h1>
  );

const ActivitiesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [nearbyActivities, setNearbyActivities] = useState<
    ActivityType[] | null
  >(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<
    ActivityType[] | null
  >(null);

  const {
    activities,
  }: {
    activities: ActivityType[];
  } = useSelector((state: any) => state.activities);

  useEffect(() => {
    console.log('nearbyActivities', activities);
    const fetchNearbyActivities = async () => {
      const result = await activitiesService.getActivitiesNearMe();
      setNearbyActivities(result);
      setSelectedActivities(result);
    };
    if (activities.length === 0) {
      fetchNearbyActivities();
    }
  }, []);

  return (
    <main className="page-activities">
      <HeroSlider
        slides={storySlides}
        containerStyle={{ height: '35rem', marginTop: '1rem' }}
        mediaStyle={{ height: '35rem' }}
      />
      <h1 className="section-header">All Activities</h1>
      <section className={`all-activities flex flex-wrap max-w-[90vw] `}>
        <ActivitiesButtons />
      </section>
      <h1 className="section-header">
        Activities Near Me ({activities?.length})
      </h1>
      <section className={`activities-nearby activities-group`}>
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
