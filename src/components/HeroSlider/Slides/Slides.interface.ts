import type { MediaType, StyleType, clickHandler } from '../../../types';

export interface SlideProps {
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
