import { SlideProps } from '../Slides/Slides.interface';
import type { StyleType } from '../../../types';

interface Slider {
  slides: Array<SlideProps>;
  rotate?: boolean;
  containerClasses?: string;
  containerStyle?: StyleType;
  slideContainerClasses?: string;
  mediaStyle?: StyleType;
  slideDuration?: number;
  dots?: boolean;
  selectedSlide?: number;
}

export default Slider;
