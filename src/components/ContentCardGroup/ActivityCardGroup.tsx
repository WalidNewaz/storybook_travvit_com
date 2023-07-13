import React from 'react';
import { ActivityCard } from '../ContentCard/ActivityCard';
import { ActivitySummaryType } from '../../interfaces';
import type {
  likeHandler,
  addHandler,
  shareHandler,
} from '../../types/eventHandler.types';

export const ActivityCardGroup: React.FC<{
  activities: ActivitySummaryType[];
  likeHandler: likeHandler;
  addHandler: addHandler;
  shareHandler: shareHandler;
}> = ({ activities, likeHandler, addHandler, shareHandler }) =>
  activities.map((activity) => (
    <ActivityCard
      key={activity.id}
      mediaType={activity.mediaType}
      imageProps={activity.imageProps}
      likeHandler={() => likeHandler && likeHandler(activity.id)}
      addHandler={() => addHandler && addHandler(activity.id)}
      shareHandler={() => shareHandler && shareHandler(activity.id)}
      badges={activity.badges}
      name={activity.name}
      slug={`/activities/${activity.slug}/${activity.id}`}
      place={activity.place.name}
      placeSlug={`/places/${activity.place.slug}/${activity.place.id}`}
      createdBy={activity.createdBy.name}
      createdBySrc={activity.createdBy.avatar}
      createdByLink={`/explorers/${activity.createdBy.slug}/${activity.createdBy.id}`}
      rating={activity.rating}
    />
  ));
