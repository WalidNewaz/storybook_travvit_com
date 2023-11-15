import React from 'react';

/** Components */
import TimeTable from './TimeTable';
import Heading from './Heading';
import Place from './Place';
import TripMembers from './TripMembers';
import JoinBtn from './JoinBtn';
import AvatarProps from '../../Avatar/Avatar.interface';

/** Types */
import type { clickHandler, TimeUnit } from '../../../types';

const DESC_DIMS_CLASSNAME = `
  mt-[20rem] mx-4
  lg:mt-[20rem] mx-4
`;

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
}) => (
  <div className={`card-description ${DESC_DIMS_CLASSNAME}`}>
    <TimeTable startTime={startTime} duration={duration} />
    <Heading heading={heading} headingLink={headingLink} />
    <Place place={place} placeLink={placeLink} />
    <div className="flex justify-between">
      <TripMembers groupMembers={groupMembers} extraMembers={extraMembers} />
      <div>
        <JoinBtn joinHandler={joinHandler} />{' '}
      </div>
    </div>
  </div>
);

export default Description;
