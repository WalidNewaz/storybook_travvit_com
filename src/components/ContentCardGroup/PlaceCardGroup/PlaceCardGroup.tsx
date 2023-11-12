import React from 'react';
import { PlaceCard } from '../../ContentCard/PlaceCard/PlaceCard';
import { getImgagePropsWithAbsPaths } from '../../../utils';
import PlaceCardGroupProps from './PlaceCardGroup.interface';

const IMG_BASE = process.env.IMG_BASE || '';

export const PlaceCardGroup: React.FC<PlaceCardGroupProps> = ({
  places,
  bookmarkHandler,
}) => {
  return places.map((place) => {
    // Make image URLs absolute b/c this component will be fed by API responses
    const imageProps = getImgagePropsWithAbsPaths(IMG_BASE, place.imageProps);
    return (
      <PlaceCard
        key={place.id}
        mediaType={place.mediaType}
        imageProps={imageProps}
        bookmarkHandler={() => bookmarkHandler && bookmarkHandler(place.id)}
        bookmarked={place.bookmarked}
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
