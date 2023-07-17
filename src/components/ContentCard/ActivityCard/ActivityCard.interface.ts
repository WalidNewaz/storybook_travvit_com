import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import type { clickHandler, MediaType } from '../../../types';

interface ActivityCard {
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
  name: string;
  slug: string;
  place: string;
  placeSlug: string;
  createdBy: string;
  createdBySrc: string;
  createdByLink: string;
  rating: string;
  className?: string;
}

export default ActivityCard;
