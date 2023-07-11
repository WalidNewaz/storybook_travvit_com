import React from 'react';

import { AvatarProps } from '../Avatar/Avatar';
import type { AvatarSize } from '../Avatar/Avatar';

export interface AvatarGroupProps {
  AvatarComponent: React.FC<any>;
  groupMembers: AvatarProps[];
  limit?: number;
  size?: AvatarSize;
  className?: string;
}

const BASE_AVATAR_GRP_CLASSES =
  'avatar-group flex -space-x-2 overflow-hidden p-1';

/**
 * This component is used to display a group of avatars.
 *
 * @param AvatarComponent - The avatar component to render for each member.
 * @param groupMembers - The array of group members.
 * @param limit - The maximum number of avatars to display.
 * @param size - The size of the avatars.
 * @returns JSX element
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  AvatarComponent,
  groupMembers,
  limit = 3,
  size = 'small',
  className = '',
}) => {
  const group = groupMembers.slice(0, limit);
  const groupAvatars = group.map((member: any, index: number) => (
    <AvatarComponent
      key={index}
      {...{
        ...member,
        size,
      }}
    />
  ));
  return (
    <div className={`${BASE_AVATAR_GRP_CLASSES} ${className}`}>
      {groupAvatars}
    </div>
  );
};
