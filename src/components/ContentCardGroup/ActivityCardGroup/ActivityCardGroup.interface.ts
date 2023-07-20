import type {
  MediaType,
  likeHandler,
  addHandler,
  shareHandler,
} from '../../../types';
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';

export interface ActivitySummaryType {
  id: string;
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  badges: Array<string>;
  name: string;
  slug: string;
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
  rating: string | number;
  className?: string;
}

interface ActivityCardGroup {
  activities: ActivitySummaryType[];
  likeHandler: likeHandler;
  addHandler: addHandler;
  shareHandler: shareHandler;
}

export default ActivityCardGroup;
