import React from 'react';
import { MediaCard } from '../../MediaCard/MediaCard';
import SocialCategoryActionLayer from '../../MediaCard/SocialCategoryActionLayer/SocialCategoryActionLayer';
import { FiMapPin } from 'react-icons/fi';
import { Avatar } from '../../Avatar/Avatar';
import { AvatarGroup } from '../../AvatarGroup/AvatarGroup';
import { Button } from '../../Button/Button';
import { pluralize } from 'inflection';
import TripCardProps from './TripCard.interface';
import AvatarProps from '../../Avatar/Avatar.interface';
import type { clickHandler, TimeUnit } from '../../../types';

const MAX_AVATARS = 3;

const TimeTable: React.FC<{
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
}> = ({ startTime, duration }) => (
  <div className="flex flex-row justify-between text-slate-800">
    <p className="uppercase mb-2">📅 {startTime}</p>
    <p className="uppercase mb-2">
      ⏱️ {duration.amount} {pluralize(duration.unit)}
    </p>
  </div>
);

const Heading: React.FC<{
  heading: string;
  headingLink: string;
}> = ({ heading, headingLink }) => (
  <a
    href={headingLink}
    className="text-travvit-blue-800 hover:text-travvit-blue"
  >
    <h2>{heading}</h2>
  </a>
);

const Place: React.FC<{
  place: string;
  placeLink: string;
}> = ({ place, placeLink }) => (
  <div className="flex">
    <FiMapPin className="my-3 mr-3 text-slate-500" />
    <a
      href={placeLink}
      className="text-slate-500 hover:text-slate-700 uppercase"
    >
      <p className="my-2">{place}</p>
    </a>
  </div>
);

const TripMembers: React.FC<{
  groupMembers: AvatarProps[];
  extraMembers: number | null;
}> = ({ groupMembers, extraMembers }) => (
  <div className="trip-members flex">
    <AvatarGroup
      AvatarComponent={Avatar}
      groupMembers={groupMembers}
      limit={MAX_AVATARS}
      size="xs"
    />
    {extraMembers && <span className="ml-3 my-2.5">+{extraMembers}</span>}
  </div>
);

const JoinBtn: React.FC<{ joinHandler?: clickHandler }> = ({ joinHandler }) =>
  joinHandler && <Button label="Join" size="small" onClick={joinHandler} />;

const FollowBtn: React.FC<{ followHandler: clickHandler }> = ({
  followHandler,
}) =>
  followHandler && (
    <Button label="Follow" size="small" primary onClick={followHandler} />
  );

const Description: React.FC<{
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
  heading: string;
  headingLink: string;
  place: string;
  placeLink: string;
  groupMembers: AvatarProps[];
  extraMembers: number | null;
  joinHandler?: clickHandler;
  followHandler?: clickHandler;
}> = ({
  startTime,
  duration,
  heading,
  headingLink,
  place,
  placeLink,
  groupMembers,
  extraMembers,
  joinHandler,
  followHandler,
}) => (
  <div className="card-description mt-[21rem] mx-4">
    <TimeTable startTime={startTime} duration={duration} />
    <Heading heading={heading} headingLink={headingLink} />
    <Place place={place} placeLink={placeLink} />
    <div className="flex justify-between">
      <TripMembers groupMembers={groupMembers} extraMembers={extraMembers} />
      <div>
        <JoinBtn joinHandler={joinHandler} />{' '}
        <FollowBtn followHandler={followHandler} />
      </div>
    </div>
  </div>
);

export const TripCard: React.FC<TripCardProps> = ({
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
  joinHandler,
  followHandler,
}) => {
  const extraMembers =
    groupMembers.length > MAX_AVATARS
      ? groupMembers.length - MAX_AVATARS
      : null;
  return (
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
        extraMembers={extraMembers}
        joinHandler={joinHandler}
        followHandler={followHandler}
      />
    </div>
  );
};
