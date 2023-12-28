import React from 'react';

/**
 * This component renders the number of activities a trip user has joined.
 * @param params
 * @returns
 */
const NumActivities: React.FC<{ numActivities: number }> = ({
  numActivities,
}) => {
  return (
    <p className="text-sm leading-6 text-gray-900">
      {numActivities > 0
        ? `Joined ${numActivities} activities`
        : 'No activities'}
    </p>
  );
};

export default NumActivities;
