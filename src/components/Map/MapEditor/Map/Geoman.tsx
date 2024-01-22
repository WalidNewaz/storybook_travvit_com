import { useEffect } from 'react';
import { Map, Layer, LayerGroup } from 'leaflet';
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
  getLayerDragEndHandler,
  getLayerChangeHandler,
  getLayerEditedHandler,
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
  setGeometry: React.Dispatch<any>;
}> = ({ setGeometry }) => {
  const context: LeafletContextInterface = useLeafletContext();

  useEffect(() => {
    const map = context.map;
    setupMap(map);
    map.on(MapEvents.CREATE, getDrawFinishHandler(map, setGeometry));
    map.on(MapEvents.REMOVE, getLayerRemovedHandler(map, setGeometry));
    map.on(MapEvents.DRAG_END, getLayerDragEndHandler(map, setGeometry));
    map.on(MapEvents.CHANGE, getLayerChangeHandler(map, setGeometry));
    map.on(MapEvents.EDIT, getLayerEditedHandler(map, setGeometry));
    map.on(MapEvents.UPDATE, getLayerEditedHandler(map, setGeometry));

    return () => {
      map.pm.removeControls();
    };
  }, [context]);

  return null;
};

export default Geoman;
