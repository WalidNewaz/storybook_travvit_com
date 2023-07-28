import type { StyleType, clickHandler } from '../../../types';

interface Slide {
  index: number;
  currentSlide: number;
  media: string;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: clickHandler;
  mediaClassName?: string;
  mediaStyle?: StyleType | null;
  slideMediaStyle?: StyleType | null;
  className?: string;
}

export default Slide;
