import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import type { clickHandler, MediaType } from '../../../types';

interface PlaceCard {
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  bookmarkHandler: clickHandler;
  bookmarked?: boolean;
  badges: Array<string>;
  heading: string;
  headingLink: string;
  subHeading: string;
  subHeadingLink: string;
  rating: string;
  className?: string;
}

export default PlaceCard;
