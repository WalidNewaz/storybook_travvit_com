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
import { Button } from '../components/Button/Button';
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

import ActivitiesService from './mocks/activities/activities.service';
import type { clickHandler } from '../types';

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

/**
 * Returns an event handler for the activity buttons
 * @param setSelectedActivity
 * @returns event handler
 */
const getActivityHandler =
  (setSelectedActivity: React.Dispatch<React.SetStateAction<string | null>>) =>
  (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectActivity = event.currentTarget.value;
    console.log('selectActivity', selectActivity);
    setSelectedActivity(selectActivity);
  };

const getActivityTypeNames = (activities: ActivityType[]) => {
  const names = activities.map((activity) => activity.type);
  return names;
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

const ActivitiesButtons: React.FC<{
  activityNames: string[] | null;
  selectedActivity: string | null;
  activitiesSelectHanlder: clickHandler;
}> = ({ activityNames, selectedActivity, activitiesSelectHanlder }) => {
  const activityButtons = activityNames?.map((activityName, index) =>
    selectedActivity === activityName ? (
      <Button
        key={index}
        className="flex m-2 whitespace-nowrap"
        label={activityName}
        value={activityName}
        onClick={activitiesSelectHanlder}
        primary
      />
    ) : (
      <Button
        key={index}
        className="flex m-2 whitespace-nowrap"
        label={activityName}
        value={activityName}
        onClick={activitiesSelectHanlder}
      />
    ),
  );

  return (
    <>
      <h1 className="section-header">Nearby Activities</h1>
      <section className={`all-activities flex flex-wrap max-w-[90vw] `}>
        <ContentRibbon>
          {activityNames && (
            <>
              <Button
                className="flex m-2 whitespace-nowrap"
                label="All Activities"
                value="All Activities"
                onClick={activitiesSelectHanlder}
                {...(selectedActivity === 'All Activities' && {
                  primary: true,
                })}
              />
              {activityButtons}
            </>
          )}
        </ContentRibbon>
      </section>
    </>
  );
};

const ActivitiesHeader: React.FC<{
  selectedActivity: string | null;
  count?: number;
}> = ({ selectedActivity, count = 0 }) =>
  selectedActivity ? (
    <h1 className="section-header">
      {selectedActivity} Near Me ({count})
    </h1>
  ) : (
    <h1 className="section-header">Activities Near Me ({count})</h1>
  );

const SelectedActivities: React.FC<{
  selectedActivity: string | null;
  selectedActivities: ActivityType[] | null;
}> = ({ selectedActivities, selectedActivity }) => {
  return (
    <>
      <ActivitiesHeader
        selectedActivity={selectedActivity}
        count={selectedActivities?.length}
      />
      <section className={`activities-nearby activities-group`}>
        {selectedActivities && (
          <ActivityCardGroup
            activities={selectedActivities}
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
    </>
  );
};

const ActivitiesPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [nearbyActivities, setNearbyActivities] = useState<
    ActivityType[] | null
  >(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(
    'All Activities',
  );
  const [selectedActivities, setSelectedActivities] = useState<
    ActivityType[] | null
  >(null);
  const [activityNames, setActivityNames] = useState<string[] | null>(null);

  const {
    activities,
  }: {
    activities: ActivityType[];
  } = useSelector((state: any) => state.activities);

  useEffect(() => {
    const fetchNearbyActivities = async () => {
      const result = await activitiesService.getActivitiesNearMe();
      console.log('nearbyActivities', result);
      setNearbyActivities(result);
      setActivityNames(getActivityTypeNames(result));
      setSelectedActivities(result);
    };
    if (activities.length === 0) {
      fetchNearbyActivities();
    }
  }, []);

  const activitiesSelectHanlder = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const activityName = event.currentTarget.value;
    console.log('selectActivity', activityName);
    setSelectedActivity(activityName);
    if (activityName === 'All Activities') {
      setSelectedActivities(nearbyActivities);
      return;
    }
    const filteredActivities = nearbyActivities?.filter(
      (activity) => activity.type === activityName,
    ) as ActivityType[];
    setSelectedActivities(filteredActivities);
  };

  return (
    <main className="page-activities">
      <HeroSlider
        slides={storySlides}
        containerStyle={{ height: '35rem', marginTop: '1rem' }}
        mediaStyle={{ height: '35rem' }}
      />
      <ActivitiesButtons
        activityNames={activityNames}
        selectedActivity={selectedActivity}
        activitiesSelectHanlder={activitiesSelectHanlder as clickHandler}
      />
      <SelectedActivities
        selectedActivity={selectedActivity}
        selectedActivities={selectedActivities}
      />
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
