import React from 'react';

/** Components  */
import { Avatar } from '../../Avatar/Avatar';
import { AvatarGroup } from '../../AvatarGroup/AvatarGroup';
import AvatarProps from '../../Avatar/Avatar.interface';

const MAX_AVATARS = 3;

const TripMembers: React.FC<{
  groupMembers: AvatarProps[];
  extraMembers: number | null;
}> = ({ groupMembers, extraMembers }) => (
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

export default TripMembers;
