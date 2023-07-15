import React from 'react';
import { ActivityCard } from '../ContentCard/ActivityCard';
import { ActivitySummaryType } from '../../interfaces';
import { getImgagePropsWithAbsPaths, getAbsolutePath } from '../../utils';
import type {
  likeHandler,
  addHandler,
  shareHandler,
} from '../../types/eventHandler.types';

const IMG_BASE = process.env.IMG_BASE || '';

export const ActivityCardGroup: React.FC<{
  activities: ActivitySummaryType[];
  likeHandler: likeHandler;
  addHandler: addHandler;
  shareHandler: shareHandler;
}> = ({ activities, likeHandler, addHandler, shareHandler }) => {
  return activities.map((activity) => {
    // Make image URLs absolute b/c this component will be fed by API responses
    const imageProps = getImgagePropsWithAbsPaths(
      IMG_BASE,
      activity.imageProps,
    );
    return (
      <ActivityCard
        key={activity.id}
        mediaType={activity.mediaType}
        imageProps={imageProps}
        likeHandler={() => likeHandler && likeHandler(activity.id)}
        addHandler={() => addHandler && addHandler(activity.id)}
        shareHandler={() => shareHandler && shareHandler(activity.id)}
        badges={activity.badges}
        name={activity.name}
        slug={`/activities/${activity.slug}/${activity.id}`}
        place={activity.place.name}
        placeSlug={`/places/${activity.place.slug}/${activity.place.id}`}
        createdBy={activity.createdBy.name}
        createdBySrc={getAbsolutePath(IMG_BASE, activity.createdBy.avatar)}
        createdByLink={`/explorers/${activity.createdBy.slug}/${activity.createdBy.id}`}
        rating={activity.rating as string}
      />
    );
  });
};
