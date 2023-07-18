import { SlideProps } from '../Slides/Slides.interface';

interface SlideDots {
  slides: Array<SlideProps>;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export default SlideDots;
