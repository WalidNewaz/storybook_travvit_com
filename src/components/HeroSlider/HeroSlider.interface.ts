import { SlideProps } from './Slides/Slides.interface';
import type { StyleType } from '../../types';

interface HeroSlider {
  slides: Array<SlideProps>;
  containerClasses?: string;
  containerStyle?: StyleType;
  slideContainerClasses?: string;
  mediaStyle?: StyleType;
  slideDuration?: number;
}

export default HeroSlider;
