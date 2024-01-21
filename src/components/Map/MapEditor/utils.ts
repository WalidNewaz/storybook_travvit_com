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
  });
  map.setView([51.505, -0.09], 13);
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
      console.log('Added shape:', shape);

      // enable editing of circle
      (shape.layer as LayerGroup).pm.enable();

      // shape.layer.addTo();

      console.log(`object created: ${(shape.layer as Path).pm.getShape()}`);
      const geoJson = JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON());
      console.log(geoJson);
      setGeometry(geoJson);
      map.pm.getGeomanLayers(true).bindPopup('i am whole').openPopup();
      map.pm
        .getGeomanLayers()
        .map((layer, index) => layer.bindPopup(`I am figure N° ${index}`));
      shape.layer.on(MapEvents.EDIT, getLayerEditedHandler(map));
    }
  };

/**
 * Get layer edited handler
 * @param map
 * @returns
 */
export const getLayerEditedHandler = (map: Map) => (e: { layer: L.Layer }) => {
  const event = e;
  console.log('Edited layer:', event);
  console.log(JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON()));
};

/**
 * Get layer removed handler
 * @param map
 * @returns
 */
export const getLayerRemovedHandler = (map: Map) => (e: { layer: L.Layer }) => {
  const event = e;
  console.log('Removed layer:', event);
  console.log(JSON.stringify(map.pm.getGeomanLayers(true).toGeoJSON()));
};
