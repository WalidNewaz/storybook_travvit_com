import React from 'react';
import { pluralize } from 'inflection';
import type { TimeUnit } from '../../../types';

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

export default TimeTable;
