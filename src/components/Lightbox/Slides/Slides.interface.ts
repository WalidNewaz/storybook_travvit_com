import type { MediaType, StyleType } from '../../../types';

export interface SlideProps {
  media: string;
  mediaType?: MediaType;
  alt?: string;
  description?: string;
  mediaClassName?: string;
  mediaStyle?: StyleType | undefined;
  className?: string;
}

interface Slides {
  slides: Array<SlideProps>;
  currentSlide: number;
  mediaStyle?: StyleType | undefined;
}

export default Slides;
