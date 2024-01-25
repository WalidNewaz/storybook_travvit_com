import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Polygon,
  Point,
  GeoJsonProperties,
  Feature,
  FeatureCollection,
} from 'geojson';

/** Component */
import MapBox from '../components/Map/MapBox/MapBox';
import SimpleMap from '../components/Map/SimpleMap/SimpleMap';

export default {
  title: 'Components/MapBox',
  component: MapBox,
  decorators: [
    (story) => {
      return (
        <div className="bg-travvit-orange/10 min-h-[85vh] h-[75vh] w-[100vw]">
          {story()}
        </div>
      );
    },
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MapBox>;

export const Default: Story = {};

type FeatureDescription = GeoJsonProperties & {
  name: string;
  description?: string;
};

const convertPolygonToFeature = (
  polygon: Polygon,
  properties?: FeatureDescription,
) => {
  return {
    type: 'Feature',
    geometry: polygon,
    ...(properties && { properties }),
  } as Feature<Polygon>;
};

const convertLatLongToFeature = (
  longitude: number,
  latitude: number,
  properties?: FeatureDescription,
) => {
  return {
    type: 'Feature',
    ...(properties && { properties }),
    geometry: {
      type: 'Point',
      coordinates: [longitude, latitude],
    },
  } as Feature<Point>;
};

const convertFeatureListToFeatureCollection = (features: Feature[]) => {
  return {
    type: 'FeatureCollection',
    features,
  } as FeatureCollection;
};

const geometry: Polygon = {
  type: 'Polygon',
  coordinates: [
    [
      [-109.039307, 37.005314],
      [-109.039307, 40.997121],
      [-102.052002, 40.997121],
      [-102.052002, 37.005314],
      [-109.039307, 37.005314],
    ],
  ],
};

export const SimpleMapStory: Story = {
  name: 'Simple Map',
  render: () => {
    return (
      <div className="mt-6 w-[90vw] h-[50vh]">
        <SimpleMap
          center={[-105.990251, 38.739236]}
          zoom={5}
          featureCollection={convertFeatureListToFeatureCollection([
            convertLatLongToFeature(-105.34142, 40.006354, {
              name: 'Boulder',
              description: 'Boulder Canyon',
              link: 'https://www.bouldercoloradousa.com/things-to-do/outdoor-adventures/hiking/',
            }),
            convertLatLongToFeature(-105.202761, 39.775591, {
              name: 'North Table Mountain',
              description: 'Golden Cliffs',
              link: 'https://www.mtbproject.com/trail/7000240/golden-cliffs-loop',
            }),
          ])}
          featureCollectionName={'places'}
          className="w-full h-full flex justify-center"
        />
      </div>
    );
  },
};
