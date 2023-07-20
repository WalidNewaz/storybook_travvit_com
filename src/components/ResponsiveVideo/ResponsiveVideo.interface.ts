export interface VideoSource extends Record<string, any> {
  src: string;
  type: string;
}

interface ResponsiveVideo extends Record<string, any> {
  sources: VideoSource[];
  requiredMediaType: string;
  children?: React.ReactNode;
}

export default ResponsiveVideo;
