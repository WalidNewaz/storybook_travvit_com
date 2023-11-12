import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import type { bookmarkHandler, MediaType } from '../../../types';

export interface PlaceType {
  id: string;
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  badges: Array<string>;
  name: string;
  slug: string;
  parent: string;
  parentSlug: string;
  rating: string | number;
  bookmarked?: boolean;
}

interface PlaceCardGroup {
  places: PlaceType[];
  bookmarkHandler: bookmarkHandler;
}

export default PlaceCardGroup;
