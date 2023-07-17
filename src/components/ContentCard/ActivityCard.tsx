import React from 'react';
import { MediaCard } from '../MediaCard';
import { ResponsiveImageProps } from '../ResponsiveImage/ResponsiveImage';
import SocialCategoryActionLayer from '../MediaCard/SocialCategoryActionLayer';
import { Badge } from '../Badge/Badge';
import { PiStarFill } from 'react-icons/pi';
import type { clickHandler } from '../../types/eventHandler.types';
import { Avatar } from '../Avatar/Avatar';

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;
const DESC_DIMS_CLASSNAME = `
  mt-[20rem] mx-4
  lg:mt-[20rem] mx-4
`;

export const ActivityCard: React.FC<{
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
  name: string;
  slug: string;
  place: string;
  placeSlug: string;
  createdBy: string;
  createdBySrc: string;
  createdByLink: string;
  rating: string;
  className?: string;
}> = ({
  mediaType = 'image',
  imageProps,
  likeHandler,
  addHandler,
  shareHandler,
  badges,
  name,
  slug,
  place,
  placeSlug,
  createdBy,
  createdBySrc,
  createdByLink,
  rating,
  className,
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
          <SocialCategoryActionLayer
            badges={badges}
            likeHandler={likeHandler}
            addHandler={addHandler}
            shareHandler={shareHandler}
            className={`${MEDIA_DIMS_CLASSNAME} pr-4`}
          />
        }
      />
      <div className={`card-description ${DESC_DIMS_CLASSNAME}`}>
        <a
          href={slug}
          className="text-travvit-blue-800 hover:text-travvit-blue"
        >
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
          <a
            href={createdByLink}
            className="text-slate-500 hover:text-slate-700"
          >
            {createdBy}
          </a>
        </div>
        <div>
          <Badge rounded className="my-2">
            <PiStarFill className="text-travvit-orange-900 mr-2" /> {rating}
          </Badge>
        </div>
      </div>
    </div>
  );
};
