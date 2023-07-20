import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage.interface';
import ResponsiveVideo from '../../ResponsiveVideo/ResponsiveVideo.interface';
import type { MediaType } from '../../../types';

interface MediaLayer extends Record<string, any> {
  imageProps?: ResponsiveImage;
  videoProps?: ResponsiveVideo;
  mediaType: MediaType;
}

export default MediaLayer;
