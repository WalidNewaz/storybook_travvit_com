import React from 'react';
import { MediaCard } from '../MediaCard';
import { ResponsiveImageProps } from '../ResponsiveImage/ResponsiveImage';
import SocialCategoryActionLayer from '../MediaCard/SocialCategoryActionLayer';
import { Badge } from '../Badge/Badge';
import { PiStarFill } from 'react-icons/pi';
import type { clickHandler } from '../../types/eventHandler.types';

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;
const DESC_DIMS_CLASSNAME = `
  mt-[20rem] mx-4
  lg:mt-[20rem] mx-4
`;

export interface PlaceCardProps {
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
  rating: string;
  className?: string;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
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
  rating,
  className,
}) => {
  return (
    <div
      className={`place-card flex flex-col relative ${MEDIA_DIMS_CLASSNAME} ${className}`}
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
          href={headingLink}
          className="text-travvit-blue-800 hover:text-travvit-blue"
        >
          <h2>{heading}</h2>
        </a>
        <a
          href={subHeadingLink}
          className="text-slate-500 hover:text-slate-700 uppercase"
        >
          <p className="mt-2">{subHeading}</p>
        </a>
        <div>
          <Badge rounded className="my-2">
            <PiStarFill className="text-travvit-orange-900 mr-2" /> {rating}
          </Badge>
        </div>
      </div>
    </div>
  );
};
