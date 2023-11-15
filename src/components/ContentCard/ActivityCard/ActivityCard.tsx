import React from 'react';
import { MediaCard } from '../../MediaCard/MediaCard';
import BookmarkCategoryActionLayer from '../../MediaCard/BookmarkCategoryActionLayer/BookmarkCategoryActionLayer';
import { Badge } from '../../Badge/Badge';
import { PiStarFill } from 'react-icons/pi';
import { Avatar } from '../../Avatar/Avatar';
import ActivityCardProps from './ActivityCard.interface';
import DescriptionProps from './Description.interface';

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;
const DESC_DIMS_CLASSNAME = `
  mt-[20rem] mx-4
  lg:mt-[20rem] mx-4
`;

const Description: React.FC<DescriptionProps> = ({
  name,
  slug,
  place,
  placeSlug,
  createdBy,
  createdBySrc,
  createdByLink,
  rating,
}) => (
  <div className={`card-description ${DESC_DIMS_CLASSNAME}`}>
    <a href={slug} className="text-travvit-blue-800 hover:text-travvit-blue">
      <h2>{name}</h2>
    </a>
    <a
      href={placeSlug}
      className="text-slate-500 hover:text-slate-700 uppercase"
    >
      <p className="my-2">{place}</p>
    </a>
    <div>
      <Avatar size="xs" src={createdBySrc} className="mr-2 mb-2" />
      <a href={createdByLink} className="text-slate-500 hover:text-slate-700">
        {createdBy}
      </a>
    </div>
    <div>
      <Badge rounded className="my-2">
        <PiStarFill className="text-travvit-orange-900 mr-2" /> {rating}
      </Badge>
    </div>
  </div>
);

export const ActivityCard: React.FC<ActivityCardProps> = ({
  mediaType = 'image',
  imageProps,
  bookmarkHandler,
  bookmarked,
  badges,
  className,
  ...descriptionProps
}) => {
  return (
    <div
      className={`activity-card flex flex-col relative ${MEDIA_DIMS_CLASSNAME} ${className}`}
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
      <Description {...descriptionProps} />
    </div>
  );
};
