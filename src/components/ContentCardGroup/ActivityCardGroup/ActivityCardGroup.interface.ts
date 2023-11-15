import type { MediaType, bookmarkHandler } from '../../../types';
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';

export interface ActivityType {
  id: string;
  name: string;
  type: string;
  slug: string;
  badges: Array<string>;
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  place: {
    id: string;
    name: string;
    slug: string;
  };
  createdBy: {
    id: string;
    name: string;
    avatar: string;
    slug: string;
  };
  rating?: string | number;
  bookmarked?: boolean;
  className?: string;
}

interface ActivityCardGroup {
  activities: ActivityType[];
  bookmarkHandler: bookmarkHandler;
  className?: string;
}

export default ActivityCardGroup;
