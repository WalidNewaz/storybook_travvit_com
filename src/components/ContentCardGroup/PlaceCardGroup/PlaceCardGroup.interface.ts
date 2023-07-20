import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import type {
  likeHandler,
  addHandler,
  shareHandler,
  MediaType,
} from '../../../types';

export interface PlaceCardType {
  id: string;
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  badges: Array<string>;
  name: string;
  slug: string;
  parent: string;
  parentSlug: string;
  rating: string | number;
}

interface PlaceCardGroup {
  places: PlaceCardType[];
  likeHandler: likeHandler;
  addHandler: addHandler;
  shareHandler: shareHandler;
}

export default PlaceCardGroup;
