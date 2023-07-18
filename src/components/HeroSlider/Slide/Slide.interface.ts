import { StandardLonghandProperties } from 'csstype';
import type { clickHandler } from '../../../types/eventHandler.types';

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
  mediaStyle?: StandardLonghandProperties;
  slideMediaStyle?: React.CSSProperties | null;
  className?: string;
}

export default Slide;
