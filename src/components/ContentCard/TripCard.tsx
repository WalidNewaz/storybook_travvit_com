import React from 'react';
import { MediaCard } from '../MediaCard';
import { ResponsiveImageProps } from '../ResponsiveImage/ResponsiveImage';
import SocialCategoryActionLayer from '../MediaCard/SocialCategoryActionLayer';
import { FiMapPin } from 'react-icons/fi';
import type { clickHandler } from '../../types/eventHandler.types';
import { Avatar } from '../Avatar/Avatar';
import { AvatarGroup } from '../AvatarGroup/AvatarGroup';
import { Button } from '../Button/Button';
import { AvatarProps } from '../Avatar/Avatar';
import type { TimeUnit } from '../../types/units';
import { pluralize } from 'inflection';

const MAX_AVATARS = 3;

export const TripCard: React.FC<{
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
  heading: string;
  headingLink: string;
  subHeading: string;
  subHeadingLink: string;
  groupMembers: AvatarProps[];
  joinHandler?: clickHandler;
  followHandler?: clickHandler;
}> = ({
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
  subHeading,
  subHeadingLink,
  groupMembers,
  joinHandler,
  followHandler,
}) => {
  const extraMembers =
    groupMembers.length > MAX_AVATARS && groupMembers.length - MAX_AVATARS;
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
        <div className="flex flex-row justify-between text-slate-800">
          <p className="uppercase mb-2">📅 {startTime}</p>
          <p className="uppercase mb-2">
            ⏱️ {duration.amount} {pluralize(duration.unit)}
          </p>
        </div>
        <a
          href={headingLink}
          className="text-travvit-blue-800 hover:text-travvit-blue"
        >
          <h2>{heading}</h2>
        </a>
        <div className="flex">
          <FiMapPin className="my-3 mr-3 text-slate-500" />
          <a
            href={subHeadingLink}
            className="text-slate-500 hover:text-slate-700 uppercase"
          >
            <p className="my-2">{subHeading}</p>
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <AvatarGroup
              AvatarComponent={Avatar}
              groupMembers={groupMembers}
              limit={MAX_AVATARS}
              size="xs"
            />
            {extraMembers && (
              <span className="ml-3 my-2.5">+{extraMembers}</span>
            )}
          </div>
          <div>
            {joinHandler && (
              <Button label="Join" size="small" onClick={joinHandler} />
            )}{' '}
            {followHandler && (
              <Button
                label="Follow"
                size="small"
                primary
                onClick={followHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
