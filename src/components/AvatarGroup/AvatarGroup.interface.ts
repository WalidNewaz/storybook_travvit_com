import Avatar from '../Avatar/Avatar.interface';
import type { Size } from '../../types';

interface AvatarGroup {
  AvatarComponent: React.FC<any>;
  groupMembers: Avatar[];
  limit?: number;
  size?: Size;
  className?: string;
}

export default AvatarGroup;
