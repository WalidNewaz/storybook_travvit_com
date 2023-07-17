import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import Avatar from '../../Avatar/Avatar.interface';
import type { clickHandler, MediaType, TimeUnit } from '../../../types';

interface TripCard {
  mediaType: MediaType;
  imageProps: ResponsiveImage;
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
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
  followHandler?: clickHandler;
}

export default TripCard;
