import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import type { clickHandler } from '../../types/eventHandler.types';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';

export const ExplorerCard: React.FC<{
  src: string;
  name: string;
  profileLink: string;
  explorerLocation: string;
  locationLink: string;
  numTrips: number;
  followHandler?: clickHandler;
}> = ({
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
      <div className="explorer-avatar flex justify-center p-4">
        <Avatar src={src} size="2xl" />
      </div>
      <div className="card-description mx-4 mb-4">
        <a
          href={profileLink}
          className="text-travvit-blue-800 hover:text-travvit-blue"
        >
          <h2>{name}</h2>
        </a>
        <div className="flex">
          <FiMapPin className="my-3 mr-3 text-slate-500" />
          <a
            href={locationLink}
            className="text-slate-500 hover:text-slate-700 uppercase"
          >
            <p className="my-2">{explorerLocation}</p>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <p className="uppercase">
            {numTrips} {numTrips > 1 ? 'Trips' : 'Trip'}
          </p>
          <div className="flex justify-center">
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
