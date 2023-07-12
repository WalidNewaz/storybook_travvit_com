import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { PlaceCard } from '../components/ContentCard/PlaceCard';

/** Assets */
import { menuItems } from './mocks/menuItems';
import mountainsLake from './images/mountains_lake.jpeg';
import mountainsLakePng from './images/mountains_lake.png';
import mountainsLakeWebp from './images/mountains_lake.webp';
import lakeHaiyaha from './images/lake_haiyaha.jpeg';
import trailRun from './images/Ready-set-trail-How-to-prepare-for-trail-running-small.jpeg';
import face1 from './images/img_7.jpeg';
import face2 from './images/img_10.jpeg';
import face3 from './images/img_30.jpeg';

export default {
  title: 'Pages/Places',
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

const POPULAR_PLACES_CLASSNAME = `
  popular-places
  grid justify-items-center grid-cols-1 gap-x-4 gap-y-36
  md:justify-items-start md:grid-cols-2
  lg:grid-cols-3
  dt_small:grid-cols-3 gap-x-6
  dt_lg:grid-cols-4 gap-x-6
`;

export const Page: Story = {
  name: 'Places',
  render: () => (
    <main className="page-places">
      <h1 className="xs:text-3xl sm:text-4xl md:text-5xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Popular Places
      </h1>
      <section className={POPULAR_PLACES_CLASSNAME}>
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
          className="m-1"
        />
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
          className="m-1"
        />
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
          className="m-1"
        />
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
          className="m-1"
        />
      </section>
      <section className="places-around-you"></section>
    </main>
  ),
};
