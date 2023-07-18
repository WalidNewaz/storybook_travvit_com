import type { clickHandler } from '../../../types/eventHandler.types';
import type { MediaType, StyleType } from '../../../types';

interface SlideProps {
  media: string;
  mediaType?: MediaType;
  alt?: string;
  description?: string;
  descriptionClasses?: string;
  buttonText?: string;
  buttonOnClick?: clickHandler;
  mediaClassName?: string;
  mediaStyle?: StyleType | null;
  className?: string;
}

interface Slides {
  slides: Array<SlideProps>;
  currentSlide: number;
  mediaStyle?: StyleType | null;
}

export default Slides;
