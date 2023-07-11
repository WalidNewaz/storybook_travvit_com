import React from 'react';
import { MediaCard } from '../MediaCard';
import { ResponsiveImageProps } from '../ResponsiveImage';
import SocialCategoryActionLayer from '../MediaCard/SocialCategoryActionLayer';
import { Badge } from '../Badge';
import { PiStarFill } from 'react-icons/pi';
import type { clickHandler } from '../../types/eventHandler.types';

export const PlaceCard: React.FC<{
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
