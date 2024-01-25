import { GeoJsonProperties } from 'geojson';

export type FeatureDescription = GeoJsonProperties & {
  name: string;
  description?: string;
  link?: string;
};
