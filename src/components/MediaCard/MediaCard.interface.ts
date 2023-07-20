import type { MediaType, StyleType } from '../../types';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage.interface';
import ResponsiveVideo from '../ResponsiveVideo/ResponsiveVideo.interface';

interface MediaCard {
  mediaType: MediaType;
  imageProps?: ResponsiveImage;
  videoProps?: ResponsiveVideo;
  actionLayer?: React.ReactNode;
  containerStyle?: StyleType | undefined;
  mediaStyle?: StyleType | undefined;
  className?: string;
}

export default MediaCard;
