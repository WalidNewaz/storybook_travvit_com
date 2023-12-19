import { SlideProps } from '../Slides/Slides.interface';

interface SlideDots {
  slides: Array<SlideProps>;
  dots?: boolean;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export default SlideDots;
