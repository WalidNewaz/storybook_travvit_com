import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';
import type { RequestStatus } from '../types';

import { Mockstore } from './mocks/store';
import {
  getAllActivities,
  selectAllActivities,
  DataState as ActivitiesState,
} from './mocks/activities/activitiesSlice';
import {
  setSelectedActivity,
  getSelectedActivityType,
} from './mocks/activities/selectedActivitySlice';
import { login, logout } from './mocks/profile/profileSlice';

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
import FloatingActionMenu from '../components/Menu/FloatingActionMenu/FloatingActionMenu';

import type { clickHandler } from '../types';

/** Assets */
import { getMenuItems } from './mocks/menuItems';
import hikingImgJpeg from './images/hennadii-hryshyn-hiking-lg.jpeg';
import climbingImgJpeg from './images/fionn-claydon-climbing-lg.jpeg';
import campingImgJpeg from './images/patrick-hendry-camping-lg.jpeg';
import bikingImgJpeg from './images/axel-brunst-mtn-biking.jpeg';
import { AiOutlinePlus } from 'react-icons/ai';
import { PiMountainsDuotone } from 'react-icons/pi';
import { FaPersonHiking } from 'react-icons/fa6';
import { BiTrip } from 'react-icons/bi';

const WrappedHeader = () => {
  const dispatch = useDispatch();
  const menuItems = getMenuItems(dispatch, login, logout);
  const user = useSelector((state: any) => state.profile.user);
  return <TravvitHeader menuItems={menuItems} user={user} />;
};

export default {
  title: 'Pages/Activities',
  component: FullPageScroll,
  decorators: [
    (story) => {
      return (
        <Mockstore>
          <div className="flex w-full">
            <div className="left-column flex-1"></div>
            <div className="middle-column flex-[0_1_92%] max-w-screen-dt_mid mt-8">
              <WrappedHeader />
              {story()}
              <TravvitFooter />
            </div>
            <div className="right-column flex-1"></div>
          </div>
        </Mockstore>
      );
    },
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

const ActivityTypesLoader = () => (
  <ContentLoader
    height={50}
    width={600}
    speed={2}
    foregroundColor="#f3f3f3"
    backgroundColor="#d9d7d7"
  >
    <rect x="5" y="10" rx="20" ry="20" width="135" height="40" />
    <rect x="160" y="10" rx="20" ry="20" width="100" height="40" />
    {/* <rect x="275" y="10" rx="20" ry="20" width="135" height="40" /> */}
  </ContentLoader>
);

const ActivityCardGroupLoader = () => (
  <ContentLoader
    height={500}
    width={360}
    speed={2}
    foregroundColor="#f3f3f3"
    backgroundColor="#d9d7d7"
  >
    <rect x="0" y="5" rx="15" ry="15" width="304" height="304" />
    <rect x="15" y="330" rx="14" ry="14" width="300" height="28" />
    <rect x="15" y="365" rx="14" ry="14" width="250" height="28" />
    <circle cx="30" cy="415" r="18" />
    <rect x="55" y="405" rx="10" ry="10" width="125" height="20" />
    <rect x="15" y="445" rx="10" ry="10" width="50" height="20" />
  </ContentLoader>
);

const ActivityTypes: React.FC = () => {
  const { data: activities, status }: ActivitiesState =
    useSelector(selectAllActivities);
  const selectedActivity = useSelector(getSelectedActivityType);

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (status === 'succeeded') {
      setShowContent(true);
    }
  }, [status]);

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

  let content;
  if (status === 'loading') {
    content = (
      <div className="loader">
        <ActivityTypesLoader />
      </div>
    );
  } else if (status === 'succeeded') {
    content = (
      <ContentRibbon
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
    );
  } else if (status === 'failed') {
    content = <div className="loader">Failed!</div>;
  }

  return (
    <>
      <h1 className="section-header">Activity Types</h1>
      <section className={`all-activities flex flex-wrap max-w-[90vw]`}>
        {content}
      </section>
    </>
  );
};

const ActivitiesHeader: React.FC = () => {
  const { data: activities, status }: ActivitiesState =
    useSelector(selectAllActivities);
  const selectedActivity = useSelector(getSelectedActivityType);
  const count =
    selectedActivity === 'All Activities'
      ? activities.length
      : activities.filter((activity) => activity.type === selectedActivity)
          .length;

  let content;
  if (status === 'loading') {
    content = <div className="loader">Activities Near Me</div>;
  } else if (status === 'succeeded') {
    content = (
      <h1 className="section-header">
        {selectedActivity} Near Me ({count})
      </h1>
    );
  } else if (status === 'failed') {
    content = <div className="loader">Activities Near Me</div>;
  }
  return selectedActivity ? (
    <h1 className="section-header">{content}</h1>
  ) : (
    <h1 className="section-header">Activities Near Me ({count})</h1>
  );
};

const SelectedActivities: React.FC = () => {
  const { data: activities, status }: ActivitiesState =
    useSelector(selectAllActivities);
  const selectedActivity = useSelector(getSelectedActivityType);

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (status === 'succeeded') {
      setShowContent(true);
    }
  }, [status]);

  const selectedActivities =
    selectedActivity === 'All Activities'
      ? activities
      : activities.filter((activity) => activity.type === selectedActivity);

  let content;
  if (status === 'loading') {
    content = (
      <>
        <ActivityCardGroupLoader />
        <ActivityCardGroupLoader />
      </>
    );
  } else if (status === 'succeeded') {
    content = (
      <ActivityCardGroup
        activities={selectedActivities}
        likeHandler={(data) => alert(`Your are about to like: ${data}!`)}
        addHandler={(data) => alert(`You are adding ${data} to your wishlist.`)}
        shareHandler={(data) =>
          alert(`You are about to share ${data} with others.`)
        }
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      />
    );
  } else if (status === 'failed') {
    content = <div className="loader">Failed!</div>;
  }
  return (
    <>
      <ActivitiesHeader />
      <section className={`activities-nearby activities-group`}>
        {selectedActivities && content}
      </section>
    </>
  );
};

const FAM: React.FC = () => {
  // const dispatch = useDispatch();
  // const menuItems = getMenuItems(dispatch, login, logout);
  const user = useSelector((state: any) => state.profile.user);

  const handleAddTrip = () => {
    console.log('Add a trip!');
  };

  const handleAddActivity = () => {
    console.log('Add an activity!');
  };

  const handleAddPlace = () => {
    console.log('Add a place!');
  };

  const content = user && (
    <FloatingActionMenu
      icon={<AiOutlinePlus className="w-6 h-6 text-white" />}
      position="bottom-right"
      menuItems={[
        {
          label: 'Add a Place',
          onClick: handleAddPlace,
          icon: PiMountainsDuotone,
        },
        {
          label: 'Add an Activity',
          onClick: handleAddActivity,
          icon: FaPersonHiking,
        },
        { label: 'Add a Trip', onClick: handleAddTrip, icon: BiTrip },
      ]}
    />
  );

  return content;
};

const ActivitiesPage: React.FC = () => {
  const dispatch = useDispatch();
  const activitiesStatus: RequestStatus = useSelector(
    (state: any) => state.activities.status,
  );

  useEffect(() => {
    if (activitiesStatus === 'idle') {
      dispatch(getAllActivities());
      // dispatch({ type: 'activities/getAllActivities/pending' });
    }
  }, [activitiesStatus, dispatch]);

  return (
    <main className="page-activities">
      <HeroSlider
        slides={storySlides}
        containerStyle={{ height: '35rem', marginTop: '1rem' }}
        mediaStyle={{ height: '35rem' }}
      />
      <ActivityTypes />
      <SelectedActivities />
      <FAM />
    </main>
  );
};

export const Activities: Story = {
  name: 'Activities',
  render: () => <ActivitiesPage />,
  // decorators: [(story) => <Mockstore>{story()}</Mockstore>],
};

// const ActivityPage: React.FC = () => {};

// export const Activity: Story = {
//   name: 'Activity',
//   render: () => <ActivityPage />,
//   decorators: [
//     (story) => <Mockstore ActivityPageData={mockedState}>{story()}</Mockstore>,
//   ],
// };
