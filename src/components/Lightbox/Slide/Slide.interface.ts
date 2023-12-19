import type { StyleType } from '../../../types';

interface Slide {
  index: number;
  currentSlide: number;
  media: string;
  alt?: string;
  description?: string;
  mediaClassName?: string;
  mediaStyle?: StyleType | undefined;
  slideMediaStyle?: StyleType | undefined;
  className?: string;
}

export default Slide;
