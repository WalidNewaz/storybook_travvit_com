import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { Avatar } from '../../Avatar/Avatar';
import TripMemberCardProps from './TripMemberCard.interface';

const ExplorerAvatar: React.FC<{ src: string; isLeader: boolean }> = ({
  src,
  isLeader,
}) => (
  <div className="explorer-avatar flex justify-center p-4">
    <Avatar src={src} size="2xl" />
    {isLeader && (
      <div className="absolute top-[225px] right-[55px]">
        <FaStar className="w-8 h-8 ring-slate-300 text-green-700 rounded-full bg-white" />
      </div>
    )}
  </div>
);

const Explorer: React.FC<{
  name: string;
  profileLink: string;
}> = ({ name, profileLink }) => (
  <a
    href={profileLink}
    className="text-travvit-blue-800 hover:text-travvit-blue"
  >
    <h2>{name}</h2>
  </a>
);

const Location: React.FC<{
  explorerLocation: string;
  locationLink: string;
}> = ({ explorerLocation, locationLink }) => (
  <div className="flex">
    <FiMapPin className="my-3 mr-3 text-slate-500" />
    <a
      href={locationLink}
      className="text-slate-500 hover:text-slate-700 uppercase"
    >
      <p className="my-2">{explorerLocation}</p>
    </a>
  </div>
);

export const TripMemberCard: React.FC<TripMemberCardProps> = ({
  src,
  name,
  profileLink,
  explorerLocation,
  locationLink,
  isLeader = false,
}) => {
  return (
    <div className="explorer-card flex flex-col relative w-80 h-80">
      <ExplorerAvatar src={src} isLeader={isLeader} />
      <div className="card-description mx-4 mb-4">
        <Explorer name={name} profileLink={profileLink} />
        <Location
          locationLink={locationLink}
          explorerLocation={explorerLocation}
        />
      </div>
    </div>
  );
};
