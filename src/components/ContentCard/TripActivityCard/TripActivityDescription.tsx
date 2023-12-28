import React from 'react';

/** Components */
import TripMembers from './TripActivityMembers';
import TimeTable from './TripActivityTimeTable';
import Heading from './TripActivityHeading';
import Place from './TripActivityPlace';

/** Interfaces */
import AvatarProps from '../../Avatar/Avatar.interface';

/** Types */
import type { TimeUnit } from '../../../types';

/**
 * The description section for a trip activity card.
 * @param params
 * @returns
 */
const TripActivityDescription: React.FC<{
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
}> = ({
  startTime,
  duration,
  heading,
  headingLink,
  place,
  placeLink,
  groupMembers,
}) => (
  <div className="card-description mt-[21rem] mx-4">
    <TimeTable startTime={startTime} duration={duration} />
    <Heading heading={heading} headingLink={headingLink} />
    <Place place={place} placeLink={placeLink} />
    <div className="flex justify-between">
      <TripMembers groupMembers={groupMembers} />
    </div>
  </div>
);

export default TripActivityDescription;
