import React from 'react';

/**
 * This component renders the last seen status of a trip user.
 * @param params
 * @returns
 */
const LastSeen: React.FC<{ lastSeen: string; lastSeenDateTime: string }> = ({
  lastSeen,
  lastSeenDateTime,
}) => {
  return lastSeen ? (
    <p className="mt-1 text-xs leading-5 text-gray-500">
      Last seen <time dateTime={lastSeenDateTime}>{lastSeen}</time>
    </p>
  ) : (
    <div className="mt-1 flex items-center gap-x-1.5">
      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </div>
      <p className="text-xs leading-5 text-gray-500">Online</p>
    </div>
  );
};

export default LastSeen;
