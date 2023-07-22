import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useSelector, useDispatch } from 'react-redux';

import { Mockstore } from './mocks/store';
import {
  getActivitiesNearMe,
  selectAllActivities,
} from './mocks/activities/activitiesSlice';
import {
  setSelectedActivity,
  getSelectedActivityType,
} from './mocks/activities/selectedActivitySlice';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/Header/Header';
import { Button } from '../components/Button/Button';
import { HeroSlider } from '../components/HeroSlider/HeroSlider';
import type { MediaTypes } from '../components/HeroSlider/HeroSlider';
import ContentRibbon from '../components/ContentRibbon/ContentRibbon';
import { ActivityCardGroup } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup';
import { ActivityType } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';

import type { clickHandler } from '../types';

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

const ActivitiesButtons: React.FC = () => {
  const activities: ActivityType[] = useSelector(selectAllActivities);
  const selectedActivity = useSelector(getSelectedActivityType);

  const dispatch = useDispatch();
  const activityNames = getActivityTypeNames(activities);

  const activitiesSelectHanlder = (event: Event) => {
    const target = event.currentTarget as HTMLButtonElement;
    const activityName = target.value;
    console.log('selectActivity', activityName);
    dispatch(setSelectedActivity({ type: activityName }));
  };

  const activityButtons = activityNames?.map((activityName, index) =>
    selectedActivity === activityName ? (
      <Button
        key={index}
        className="flex m-2 whitespace-nowrap"
        label={activityName}
        value={activityName}
        onClick={activitiesSelectHanlder as clickHandler}
        primary
      />
    ) : (
      <Button
        key={index}
        className="flex m-2 whitespace-nowrap"
        label={activityName}
        value={activityName}
        onClick={activitiesSelectHanlder as clickHandler}
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
                onClick={activitiesSelectHanlder as clickHandler}
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

const ActivitiesHeader: React.FC = () => {
  const activities: ActivityType[] = useSelector(selectAllActivities);
  const selectedActivity = useSelector(getSelectedActivityType);
  const count =
    selectedActivity === 'All Activities'
      ? activities.length
      : activities.filter((activity) => activity.type === selectedActivity)
          .length;
  return selectedActivity ? (
    <h1 className="section-header">
      {selectedActivity} Near Me ({count})
    </h1>
  ) : (
    <h1 className="section-header">Activities Near Me ({count})</h1>
  );
};

const SelectedActivities: React.FC = () => {
  const activities: ActivityType[] = useSelector(selectAllActivities);
  const selectedActivity = useSelector(getSelectedActivityType);

  const selectedActivities =
    selectedActivity === 'All Activities'
      ? activities
      : activities.filter((activity) => activity.type === selectedActivity);

  return (
    <>
      <ActivitiesHeader />
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivitiesNearMe());
  }, [dispatch]);

  return (
    <main className="page-activities">
      <HeroSlider
        slides={storySlides}
        containerStyle={{ height: '35rem', marginTop: '1rem' }}
        mediaStyle={{ height: '35rem' }}
      />
      <ActivitiesButtons />
      <SelectedActivities />
    </main>
  );
};

export const Activities: Story = {
  name: 'Activities',
  render: () => <ActivitiesPage />,
  decorators: [(story) => <Mockstore>{story()}</Mockstore>],
};

// const ActivityPage: React.FC = () => {};

// export const Activity: Story = {
//   name: 'Activity',
//   render: () => <ActivityPage />,
//   decorators: [
//     (story) => <Mockstore ActivityPageData={mockedState}>{story()}</Mockstore>,
//   ],
// };
