import React from 'react';

/** Components */
import { MediaCard } from '../../MediaCard/MediaCard';
import BookmarkCategoryActionLayer from '../../MediaCard/BookmarkCategoryActionLayer/BookmarkCategoryActionLayer';
import Description from './Description';

import TripCardProps from './TripCard.interface';

const MAX_AVATARS = 3;

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;

export const TripCard: React.FC<TripCardProps> = ({
  mediaType = 'image',
  imageProps,
  bookmarkHandler,
  bookmarked,
  badges,
  startTime,
  duration,
  heading,
  headingLink,
  place,
  placeLink,
  groupMembers,
  joinHandler,
  className,
}) => {
  const extraMembers =
    groupMembers.length > MAX_AVATARS
      ? groupMembers.length - MAX_AVATARS
      : null;
  return (
    <div
      className={`trip-card flex flex-col relative ${MEDIA_DIMS_CLASSNAME} ${className}`}
    >
      <MediaCard
        imageProps={{
          ...imageProps,
          className: `rounded-2xl ${MEDIA_DIMS_CLASSNAME} ${imageProps.className}`,
        }}
        mediaType={mediaType}
        actionLayer={
          <BookmarkCategoryActionLayer
            badges={badges}
            bookmarkHandler={bookmarkHandler}
            bookmarked={bookmarked}
            className={`${MEDIA_DIMS_CLASSNAME} pr-4`}
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
        extraMembers={extraMembers}
        joinHandler={joinHandler}
      />
    </div>
  );
};
