import type { Size, Gender } from '../../types';

interface AvatarProps {
  src: string;
  size?: Size;
  alt?: string;
  gender?: Gender;
  className?: string;
}

export default AvatarProps;
