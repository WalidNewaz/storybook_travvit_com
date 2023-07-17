import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import type { MediaType } from '../../../types';

interface CategoryCard {
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  heading: string;
  href: string;
  className?: string;
}

export default CategoryCard;
