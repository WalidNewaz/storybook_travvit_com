import React from 'react';

export type AvatarSize = 'xs' | 'small' | 'medium' | 'large' | 'xl';

interface AvatarGroupProps {
  AvatarComponent: React.FC<any>;
  groupMembers: any;
  limit?: number;
  size?: AvatarSize;
}

const BASE_AVATAR_GRP_CLASSES = 'mt-3 flex -space-x-2 overflow-hidden p-1';

/**
 * This component is used to display a group of avatars
 * @param props
 * @returns
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  AvatarComponent,
  groupMembers,
  limit = 3,
  size = 'small',
}) => {
  const group = groupMembers.slice(0, limit);
  const groupAvatars = group.map((member: any) => (
    <AvatarComponent
      {...{
        ...member,
        size,
      }}
    />
  ));
  return <div className={BASE_AVATAR_GRP_CLASSES}>{groupAvatars}</div>;
};
