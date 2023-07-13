import React from 'react';
import { PlaceCard } from '../ContentCard/PlaceCard';
import { PlaceCardType } from '../../interfaces';
import type {
  likeHandler,
  addHandler,
  shareHandler,
} from '../../types/eventHandler.types';

export const PlaceCardGroup: React.FC<{
  places: PlaceCardType[];
  likeHandler: likeHandler;
  addHandler: addHandler;
  shareHandler: shareHandler;
}> = ({ places, likeHandler, addHandler, shareHandler }) =>
  places.map((place) => (
    <PlaceCard
      key={place.id}
      mediaType={place.mediaType}
      imageProps={place.imageProps}
      likeHandler={() => likeHandler && likeHandler(place.id)}
      addHandler={() => addHandler && addHandler(place.id)}
      shareHandler={() => shareHandler && shareHandler(place.id)}
      badges={place.badges}
      heading={place.name}
      headingLink={`/places/${place.slug}/${place.id}`}
      subHeading={place.location}
      subHeadingLink={`/locations/${place.locationSlug}`}
      rating={place.rating as string}
      className="m-1"
    />
  ));
