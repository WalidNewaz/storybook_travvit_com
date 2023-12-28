import React from 'react';
import { pluralize } from 'inflection';

/** Types */
import type { TimeUnit } from '../../../types';

/**
 * The time table for a trip activity.
 * @param params
 * @returns
 */
const TripActivityTimeTable: React.FC<{
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
  className?: string;
}> = ({ startTime, duration, className }) => (
  <div className={`flex flex-row justify-between text-slate-800 ${className}`}>
    <span className="uppercase mb-2">📅 {startTime}</span>
    <span className="uppercase mb-2">
      ⏱️ {duration.amount} {pluralize(duration.unit)}
    </span>
  </div>
);

export default TripActivityTimeTable;
