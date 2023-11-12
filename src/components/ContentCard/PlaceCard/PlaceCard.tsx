import React from 'react';
import { MediaCard } from '../../MediaCard/MediaCard';
import BookmarkCategoryActionLayer from '../../MediaCard/BookmarkCategoryActionLayer/BookmarkCategoryActionLayer';
import { Badge } from '../../Badge/Badge';
import { PiStarFill } from 'react-icons/pi';
import PlaceCardProps from './PlaceCard.interface';

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;
const DESC_DIMS_CLASSNAME = `
  mt-[20rem] mx-4
  lg:mt-[20rem] mx-4
`;

const Description: React.FC<{
  heading: string;
  headingLink: string;
  subHeading: string;
  subHeadingLink: string;
  rating: string;
}> = ({ heading, headingLink, subHeading, subHeadingLink, rating }) => (
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
);

export const PlaceCard: React.FC<PlaceCardProps> = ({
  mediaType = 'image',
  imageProps,
  bookmarkHandler,
  bookmarked,
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
          <BookmarkCategoryActionLayer
            badges={badges}
            bookmarkHandler={bookmarkHandler}
            bookmarked={bookmarked}
            className={`${MEDIA_DIMS_CLASSNAME} pr-4`}
          />
        }
      />
      <Description
        heading={heading}
        headingLink={headingLink}
        subHeading={subHeading}
        subHeadingLink={subHeadingLink}
        rating={rating}
      />
    </div>
  );
};
