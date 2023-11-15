import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import Avatar from '../../Avatar/Avatar.interface';
import type { clickHandler, MediaType, TimeUnit } from '../../../types';

interface TripCard {
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  bookmarkHandler: clickHandler;
  bookmarked?: boolean;
  badges: Array<string>;
  startTime: string;
  duration: {
    amount: number;
    unit: TimeUnit;
  };
  heading: string;
  headingLink: string;
  place: string;
  placeLink: string;
  groupMembers: Avatar[];
  joinHandler?: clickHandler;
  className?: string;
}

export default TripCard;
