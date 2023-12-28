import React from 'react';
import { pluralize } from 'inflection';

import type { TimeUnit } from '../../../types';

/**
 * Time span for a trip activity.
 */
const TripActivityTimeSpan: React.FC<{
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
}> = ({ startTime, duration }) => {
  return (
    <p className="mt-1 truncate text-xs leading-5 text-gray-500 flex">
      <span className="pr-3">📅 {startTime}</span>
      <svg
        viewBox="0 0 3 3"
        className="w-2 h-2 my-2 mr-3 fill-current hidden sm:block"
      >
        <circle cx="1" cy="1" r="1"></circle>
      </svg>
      <span className="hidden sm:block">
        ⏱️ {duration.amount} {pluralize(duration.unit)}
      </span>
    </p>
  );
};

export default TripActivityTimeSpan;
