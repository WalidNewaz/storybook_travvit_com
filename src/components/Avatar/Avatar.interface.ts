import type { Size, Gender } from '../../types';

interface Avatar {
  src: string;
  size?: Size;
  alt?: string;
  gender?: Gender;
  className?: string;
}

export default Avatar;
