import Avatar from '../Avatar/Avatar.interface';

interface AvatarGroupProps {
  AvatarComponent: React.FC<any>;
  groupMembers: Avatar[];
  limit?: number;
  size?: AvatarSize;
  className?: string;
}

export default AvatarGroupProps;
