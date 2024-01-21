import { useEffect } from 'react';
import { Map, Layer, LayerGroup, polygon, LatLngExpression } from 'leaflet';
import { FeatureCollection, Polygon, Position } from 'geojson';
import {
  useLeafletContext,
  LeafletContextInterface,
} from '@react-leaflet/core';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

/** Enums */
import { MapEvents } from './mapEvents.enum';

/** Utils */
import {
  setupMap,
  getDrawFinishHandler,
  getLayerRemovedHandler,
} from '../utils';

type ControlledLayer = {
  addLayer(layer: Layer): void;
  removeLayer(layer: Layer): void;
};

export type GeomanContainerType = LayerGroup | ControlledLayer | Map;

/**
 * The Geoman component is a wrapper for the Leaflet Geoman plugin.
 * @returns
 */
const Geoman: React.FC<{
  geometry: any;
  setGeometry: React.Dispatch<any>;
}> = ({ geometry, setGeometry }) => {
  const context: LeafletContextInterface = useLeafletContext();

  useEffect(() => {
    const leafletContainer: GeomanContainerType =
      context.layerContainer || context.map;

    setupMap(leafletContainer as Map);

    if (geometry && (geometry as string).length > 0) {
      console.log('geometry', geometry);
      // const feature = polygon(geometry);
      // // (leafletContainer as Map).addLayer(feature);
      // feature.addTo(leafletContainer as Map);
    }

    (leafletContainer as Map).on(
      MapEvents.CREATE,
      getDrawFinishHandler(leafletContainer as Map, setGeometry),
    );

    (leafletContainer as Map).on(
      MapEvents.REMOVE,
      getLayerRemovedHandler(leafletContainer as Map),
    );

    return () => {
      (leafletContainer as Map).pm.removeControls();
      // (leafletContainer as Map).pm.setGlobalOptions({ pmIgnore: true });
    };
  }, [context]);

  useEffect(() => {
    const leafletContainer: GeomanContainerType =
      context.layerContainer || context.map;
    if (geometry && (geometry as string).length > 0) {
      console.log('geometry', geometry);
      const featureCollection: FeatureCollection = JSON.parse(geometry);
      const feature = polygon(
        (featureCollection.features[0].geometry as Polygon)
          .coordinates as LatLngExpression[][],
      );
      // // (leafletContainer as Map).addLayer(feature);
      feature.addTo(leafletContainer as Map);
    }
  }, []);

  return null;
};

export default Geoman;
