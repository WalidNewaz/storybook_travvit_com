export interface ImageSource extends Record<string, any> {
  type: string;
  srcSet: string;
  sizes?: string;
  media?: string;
  height?: string;
  width?: string;
}

interface ResponsiveImage extends Record<string, any> {
  sources: ImageSource[];
  alt: string;
  src: string;
}

export default ResponsiveImage;
