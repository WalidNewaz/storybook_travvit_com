import React from 'react';
import { PlaceCard } from '../../ContentCard/PlaceCard/PlaceCard';
import { getImgagePropsWithAbsPaths } from '../../../utils';
import PlaceCardGroupProps from './PlaceCardGroup.interface';

const IMG_BASE = process.env.IMG_BASE || '';

export const PlaceCardGroup: React.FC<PlaceCardGroupProps> = ({
  places,
  likeHandler,
  addHandler,
  shareHandler,
}) => {
  return places.map((place) => {
    // Make image URLs absolute b/c this component will be fed by API responses
    const imageProps = getImgagePropsWithAbsPaths(IMG_BASE, place.imageProps);
    return (
      <PlaceCard
        key={place.id}
        mediaType={place.mediaType}
        imageProps={imageProps}
        likeHandler={() => likeHandler && likeHandler(place.id)}
        addHandler={() => addHandler && addHandler(place.id)}
        shareHandler={() => shareHandler && shareHandler(place.id)}
        badges={place.badges}
        heading={place.name}
        headingLink={`/places/${place.slug}/${place.id}`}
        subHeading={place.parent}
        subHeadingLink={`/places/${place.parentSlug}`}
        rating={place.rating as string}
        className="m-1"
      />
    );
  });
};
