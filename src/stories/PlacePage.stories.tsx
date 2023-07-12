import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { PlaceCard, PlaceCardProps } from '../components/ContentCard/PlaceCard';
import { ResponsiveImageProps } from '../components/ResponsiveImage';

/** Services */
import PlacesService from './mocks/places.service';

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

/** Setup */
const placesService = new PlacesService();

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

const PLACES_CLASSNAME = `
  grid justify-items-center grid-cols-1 gap-x-4 gap-y-36
  md:justify-items-start md:grid-cols-2
  lg:grid-cols-3
  dt_small:grid-cols-3 gap-x-6
  dt_lg:grid-cols-4 gap-x-6
  mb-36
`;

interface PlaceCardType {
  id: string;
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  badges: Array<string>;
  name: string;
  slug: string;
  location: string;
  locationSlug: string;
  rating: string | number;
}

const PopularPlaces: React.FC<{ places: PlaceCardType[] }> = ({ places }) =>
  places.map((place) => (
    <PlaceCard
      key={place.id}
      mediaType={place.mediaType}
      imageProps={place.imageProps}
      likeHandler={() => alert(`Your are about to like: ${place.id}!`)}
      addHandler={() => alert(`You are adding ${place.id} to your wishlist.`)}
      shareHandler={() =>
        alert(`You are about to share ${place.id} with others.`)
      }
      badges={place.badges}
      heading={place.name}
      headingLink={place.slug}
      subHeading={place.location}
      subHeadingLink={place.locationSlug}
      rating={place.rating as string}
      className="m-1"
    />
  ));

const PlacesPage: React.FC = () => {
  const [popularPlaces, setPopularPlaces] = useState(null);

  useEffect(() => {
    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then(response => response.json())
    //     // 4. Setting *dogImage* to the image url that we received from the response above
    // .then(data => setDogImage(data.message))
    const result = placesService.getPopularPlaces();
    setPopularPlaces(result);
  }, []);

  return (
    <main className="page-places">
      <h1 className="xs:text-2xl sm:text-4xl md:text-5xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Popular Places
      </h1>
      <section className={`popular-places ${PLACES_CLASSNAME}`}>
        {popularPlaces && <PopularPlaces places={popularPlaces} />}
        {/* <PlaceCard
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
        /> */}
      </section>
      <hr />
      <h1 className="xs:text-2xl sm:text-4xl md:text-5xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Popular Places Around You
      </h1>
      <section className={`places-around-you ${PLACES_CLASSNAME}`}>
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
    </main>
  );
};

export const Page: Story = {
  name: 'Places',
  render: () => <PlacesPage />,
};
