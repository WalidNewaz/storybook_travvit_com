import React from 'react';

/** Components */
import { MediaCard } from '../../MediaCard/MediaCard';
import SocialCategoryActionLayer from '../../MediaCard/SocialCategoryActionLayer/SocialCategoryActionLayer';
import Description from './TripActivityDescription';

/** Interfaces */
import TripActivityCardProps from './TripActivityCard.interface';

/**
 * A card for a trip activity.
 * @param params
 * @returns
 */
export const TripActivityCard: React.FC<TripActivityCardProps> = ({
  mediaType = 'image',
  imageProps,
  likeHandler,
  addHandler,
  shareHandler,
  badges,
  startTime,
  duration,
  heading,
  headingLink,
  place,
  placeLink,
  groupMembers,
}) => (
  <div className="trip-card flex flex-col relative w-96 h-80">
    <MediaCard
      imageProps={{
        ...imageProps,
        className: `rounded-2xl w-96 h-80 ${imageProps.className}`,
      }}
      mediaType={mediaType}
      actionLayer={
        <SocialCategoryActionLayer
          badges={badges}
          likeHandler={likeHandler}
          addHandler={addHandler}
          shareHandler={shareHandler}
          className="w-[22rem] h-80"
        />
      }
    />
    <Description
      startTime={startTime}
      duration={duration}
      heading={heading}
      headingLink={headingLink}
      place={place}
      placeLink={placeLink}
      groupMembers={groupMembers}
    />
  </div>
);
