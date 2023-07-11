import React from 'react';
import { MediaCard } from '../MediaCard';
import { ResponsiveImageProps } from '../ResponsiveImage';
import SocialCategoryActionLayer from '../MediaCard/SocialCategoryActionLayer';
import { Badge } from '../Badge';
import { PiStarFill } from 'react-icons/pi';
import type { clickHandler } from '../../types/eventHandler.types';
import { Avatar } from '../Avatar/Avatar';

export const ActivityCard: React.FC<{
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
  heading: string;
  headingLink: string;
  subHeading: string;
  subHeadingLink: string;
  createdBy: string;
  createdBySrc: string;
  createdByLink: string;
  rating: string;
}> = ({
  mediaType = 'image',
  imageProps,
  likeHandler,
  addHandler,
  shareHandler,
  badges,
  heading,
  headingLink,
  subHeading,
  subHeadingLink,
  createdBy,
  createdBySrc,
  createdByLink,
  rating,
}) => {
  return (
    <div className="place-card flex flex-col relative w-96 h-80">
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
      <div className="card-description mt-[21rem] mx-4">
        <a
          href={headingLink}
          className="text-travvit-blue-800 hover:text-travvit-blue"
        >
          <h2>{heading}</h2>
        </a>
        <a
          href={subHeadingLink}
          className="text-slate-500 hover:text-slate-700 uppercase"
        >
          <p className="my-2">{subHeading}</p>
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
