import type { clickHandler } from '../../../types/eventHandler.types';

interface HeadingButtonActionLayer {
  heading: string;
  label: string;
  onClick: clickHandler;
  className?: string;
  headingClassName?: string;
}

export default HeadingButtonActionLayer;
