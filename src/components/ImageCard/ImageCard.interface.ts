import type { StyleType } from '../../types';

interface ImageCard {
  /**
   * Image url
   */
  src: string;
  /**
   * Image alt text
   */
  alt?: string;
  /**
   * Custom style classes for the container
   * @default ''
   */
  containerClassName?: string;
  /**
   * Custom style for the container
   * @default {}
   * */
  containerStyle?: StyleType;
  /**
   * Custom style classes for the image
   * @default ''
   * */
  imageClassName?: string;
  /**
   * Custom style for the image
   * @default {}
   * */
  imageStyle?: StyleType;
}

export default ImageCard;
