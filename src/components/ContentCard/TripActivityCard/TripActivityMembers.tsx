import React from 'react';
import { Avatar } from '../../Avatar/Avatar';
import { AvatarGroup } from '../../AvatarGroup/AvatarGroup';
import AvatarProps from '../../Avatar/Avatar.interface';

const MAX_AVATARS = 3;

/**
 * A list item for a trip participant avatars.
 * @param params
 * @returns
 */
const TripActivityMembers: React.FC<{
  groupMembers: AvatarProps[];
}> = ({ groupMembers }) => {
  const extraMembers =
    groupMembers.length > MAX_AVATARS
      ? groupMembers.length - MAX_AVATARS
      : null;
  return (
    <div className="trip-members flex">
      <AvatarGroup
        AvatarComponent={Avatar}
        groupMembers={groupMembers}
        limit={MAX_AVATARS}
        size="xs"
      />
      {extraMembers && <span className="ml-3 my-2.5">+{extraMembers}</span>}
    </div>
  );
};

export default TripActivityMembers;
