import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/TravvitHeader/Header';
import { PlaceCardGroup } from '../components/ContentCardGroup/PlaceCardGroup';
import { PlaceCardType } from '../interfaces';

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
      <h1 className="section-header">Popular Places</h1>
      <section className={`popular-places places-group`}>
        {popularPlaces && (
          <PlaceCardGroup
            places={popularPlaces}
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
      <hr />
      <h1 className="section-header">Places Near Me</h1>
      <section className={`places-around-you places-group`}>
        {nearbyPlaces && (
          <PlaceCardGroup
            places={nearbyPlaces}
            likeHandler={(data) =>
              alert(`Your are about to like the nearby place: ${data}!`)
            }
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

export const Places: Story = {
  name: 'Places',
  render: () => <PlacesPage />,
};

const PlacePage: React.FC = () => {
  const [nearbyPlaces, setNearbyPlaces] = useState<PlaceCardType[] | null>(
    null,
  );

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      const result = await placesService.getPlacesNearPlace();
      setNearbyPlaces(result);
    };
    fetchNearbyPlaces();
  }, []);

  return (
    <main className="page-places">
      <h1 className="xs:text-2xl sm:text-3xl md:text-4xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Places around Rocky Mountain National Park
      </h1>
      <section className={`popular-places places-group`}>
        {nearbyPlaces && (
          <PlaceCardGroup
            places={nearbyPlaces}
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
      <h1 className="xs:text-2xl sm:text-3xl md:text-4xl capitalize my-8 ml-1 mt-8 text-slate-600">
        Exciting activities @ Rocky Mountain National Park
      </h1>
    </main>
  );
};

export const Place: Story = {
  name: 'Rocky Mountain National Park',
  render: () => <PlacePage />,
};
