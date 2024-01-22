import { PM, Map, Path, LayerGroup } from 'leaflet';

/** Enums */
import { MapEvents } from './Map/mapEvents.enum';

/**
 * Setup map editor
 * @param map
 */
export const setupMap = (map: Map) => {
  map.pm.addControls({
    drawText: false,
    drawCircle: false,
  });
  map.pm.globalEditModeEnabled();
};

/**
 * Get draw finish handler
 * @param map
 */
export const getDrawFinishHandler =
  (map: Map, setGeometry: React.Dispatch<any>) =>
  (e: { shape: PM.SUPPORTED_SHAPES; layer: L.Layer }) => {
    if (e.layer && (e.layer as LayerGroup).pm) {
      const shape = e;
      // enable editing of circle
      (shape.layer as LayerGroup).pm.enable();

      console.log(`Shape created: ${(shape.layer as Path).pm.getShape()}`);
      const geoJson = JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON());
      setGeometry(geoJson);
      shape.layer.on(MapEvents.EDIT, getLayerEditedHandler(map, setGeometry));
    }
  };

/**
 * Get layer edited handler
 * @param map
 * @returns
 */
export const getLayerEditedHandler =
  (map: Map, setGeometry: React.Dispatch<any>) => (e: { layer: L.Layer }) => {
    const shape = e;
    console.log(`Shape edited: ${(shape.layer as Path).pm.getShape()}`);
    const geoJson = JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON());
    setGeometry(geoJson);
  };

/**
 * Get layer removed handler
 * @param map
 * @returns
 */
export const getLayerRemovedHandler =
  (map: Map, setGeometry: React.Dispatch<any>) => (e: { layer: L.Layer }) => {
    const shape = e;
    console.log(`Shape removed: ${(shape.layer as Path).pm.getShape()}`);
    const geoJson = JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON());
    setGeometry(geoJson);
  };

export const getLayerDragEndHandler =
  (map: Map, setGeometry: React.Dispatch<any>) => (e: { layer: L.Layer }) => {
    const shape = e;
    console.log(`Shape dragged: ${(shape.layer as Path).pm.getShape()}`);
    const geoJson = JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON());
    setGeometry(geoJson);
  };

export const getLayerChangeHandler =
  (map: Map, setGeometry: React.Dispatch<any>) => (e: { layer: L.Layer }) => {
    const shape = e;
    console.log(`Shape changed: ${(shape.layer as Path).pm.getShape()}`);
    const geoJson = JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON());
    setGeometry(geoJson);
  };
