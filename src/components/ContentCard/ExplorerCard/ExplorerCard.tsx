import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Avatar } from '../../Avatar/Avatar';
import { Button } from '../../Button/Button';
import ExplorerCardProps from './ExplorerCard.interface';
import type { clickHandler } from '../../../types';

const ExplorerAvatar: React.FC<{ src: string }> = ({ src }) => (
  <div className="explorer-avatar flex justify-center p-4">
    <Avatar src={src} size="2xl" />
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

const Follow: React.FC<{ followHandler?: clickHandler }> = ({
  followHandler,
}) => (
  <div className="flex justify-center">
    {followHandler && (
      <Button label="Follow" size="small" primary onClick={followHandler} />
    )}
  </div>
);

const Trips: React.FC<{ numTrips: number }> = ({ numTrips }) => (
  <p className="uppercase">
    {numTrips} {numTrips > 1 ? 'Trips' : 'Trip'}
  </p>
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

export const ExplorerCard: React.FC<ExplorerCardProps> = ({
  src,
  name,
  profileLink,
  explorerLocation,
  locationLink,
  numTrips,
  followHandler,
}) => {
  return (
    <div className="explorer-card flex flex-col relative w-80 h-80">
      <ExplorerAvatar src={src} />
      <div className="card-description mx-4 mb-4">
        <Explorer name={name} profileLink={profileLink} />
        <Location
          locationLink={locationLink}
          explorerLocation={explorerLocation}
        />
        <div className="flex justify-between items-center">
          <Trips numTrips={numTrips} />
          <Follow followHandler={followHandler} />
        </div>
      </div>
    </div>
  );
};
