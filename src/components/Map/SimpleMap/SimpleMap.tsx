import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { Feature, FeatureCollection } from 'geojson';

/** Utils */
import { drawFeatureCollection, drawFeatures } from './utils';

/** Assets */
import mapPin from './mapPin.svg';
import './styles.css';

// import config from '../../../../utils/map-config.json';

// const { MAPBOX_ACCESS_TOKEN } = config;
const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

/**
 * Simple map component that displays GeoJSON features
 *
 * @param params
 * @returns
 */
const SimpleMap: React.FC<{
  center: [number, number];
  zoom?: number;
  features?: Feature[] | null;
  featureCollection?: FeatureCollection | null;
  featureCollectionName?: string;
  className?: string;
}> = ({
  center,
  zoom = 6,
  features,
  featureCollection,
  featureCollectionName,
  className = '',
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const customPin = new Image(30, 30);
  customPin.src = mapPin;

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center,
        zoom,
        attributionControl: true,
      });

      map.current.on('load', () => {
        if (featureCollection) {
          drawFeatureCollection(
            map.current as mapboxgl.Map,
            featureCollection as FeatureCollection,
            featureCollectionName as string,
            customPin,
          );
        } else if (features && features.length > 0) {
          drawFeatures(map.current as mapboxgl.Map, features as Feature[]);
        }
      });
    }
  }, []);

  return (
    <div className={`mx-auto ${className}`}>
      <div className="w-full h-full rounded" ref={mapContainer}></div>
    </div>
  );
};

export default SimpleMap;
