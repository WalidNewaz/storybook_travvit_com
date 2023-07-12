import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { PlaceCard } from '../components/ContentCard/PlaceCard';
import { ResponsiveImageProps } from '../components/ResponsiveImage';

/** Services */
import PlacesService from './mocks/places.service';

/** Assets */
import { menuItems } from './mocks/menuItems';

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

const Places: React.FC<{ places: PlaceCardType[] }> = ({ places }) =>
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
      headingLink={`/places/${place.slug}/${place.id}`}
      subHeading={place.location}
      subHeadingLink={`/locations/${place.locationSlug}`}
      rating={place.rating as string}
      className="m-1"
    />
  ));

const PlacesPage: React.FC = () => {
  const [popularPlaces, setPopularPlaces] = useState<PlaceCardType[] | null>(
    null,
  );
  const [nearbyPlaces, setNearbyPlaces] = useState<PlaceCardType[] | null>(
    null,
  );

  useEffect(() => {
    const fetchPopularPlaces = async () => {
      const result = await placesService.getPopularPlaces();
      setPopularPlaces(result);
    };
    fetchPopularPlaces();

    const fetchNearbyPlaces = async () => {
      const result = await placesService.getPlacesNearMe();
      setNearbyPlaces(result);
    };
    fetchNearbyPlaces();
  }, []);

  return (
    <main className="page-places">
      <h1 className="xs:text-2xl sm:text-4xl md:text-5xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Popular Places
      </h1>
      <section className={`popular-places ${PLACES_CLASSNAME}`}>
        {popularPlaces && <Places places={popularPlaces} />}
      </section>
      <hr />
      <h1 className="xs:text-2xl sm:text-4xl md:text-5xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Places Near Me
      </h1>
      <section className={`places-around-you ${PLACES_CLASSNAME}`}>
        {nearbyPlaces && <Places places={nearbyPlaces} />}
      </section>
    </main>
  );
};

export const Page: Story = {
  name: 'Places',
  render: () => <PlacesPage />,
};
