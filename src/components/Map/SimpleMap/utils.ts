import mapboxgl, { MapboxGeoJSONFeature } from 'mapbox-gl';
import { Polygon, Point, Feature, FeatureCollection } from 'geojson';
import { FeatureDescription } from '../../../types/geo.types';

/**
 * Get the popup text for a feature
 * @param featureDescription
 * @returns
 */
const getPopupText = (featureDescription: FeatureDescription) => {
  const { name, description, link } = featureDescription;
  const popupText = `
  <div class="mt-5 p-2">
    <strong class="text-base">${
      link
        ? `<a href="${link}" class="${'text-blue-600 hover:text-blue-400'}">${name}</a>`
        : name
    }</strong>
    <p class="text-sm">${description}</p>
  </div>
  `;
  return popupText;
};

/**
 * Draw a point on the map
 * @param map
 * @param geometry
 * @param featureDescription
 */
const drawPoint = (
  map: mapboxgl.Map,
  geometry: Point,
  featureDescription: FeatureDescription,
) => {
  new mapboxgl.Marker()
    .setLngLat(geometry.coordinates as [number, number])
    .addTo(map);
};

/**
 * Draw a polygon on the map
 * @param map
 * @param geometry
 * @param featureDescription
 */
const drawPolygon = (
  map: mapboxgl.Map,
  geometry: Polygon,
  featureDescription: FeatureDescription,
) => {
  map.addSource('polygon', {
    type: 'geojson',
    data: geometry,
  });
  map.addLayer({
    id: 'polygon',
    type: 'fill',
    source: 'polygon',
    layout: {},
    paint: {
      'fill-color': '#5da1a1',
      'fill-opacity': 0.35,
    },
  });
  // Handle clicks on the map polygon
  map.on('click', 'polygon', (e) => {
    const popup = new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(getPopupText(featureDescription));
    popup.addTo(map);
  });
};

/**
 * Draw features on the map
 * @param map
 * @param features
 */
export const drawFeatures = (map: mapboxgl.Map, features: Feature[]) => {
  features.forEach((feature) => {
    const { geometry, properties } = feature;
    const { type } = geometry;
    switch (type) {
      case 'Point':
        drawPoint(map, geometry as Point, properties as FeatureDescription);
        break;
      case 'Polygon':
        drawPolygon(map, geometry as Polygon, properties as FeatureDescription);
        break;
      default:
        break;
    }
  });
};

/**
 * Draw a feature collection on the map
 * @param map
 * @param featureCollection
 * @param featureCollectionName
 * @param customPin
 */
export const drawFeatureCollection = (
  map: mapboxgl.Map,
  featureCollection: FeatureCollection,
  featureCollectionName: string,
  customPin: HTMLImageElement,
) => {
  map.addImage('customPin', customPin as any);
  // Add a GeoJSON source with 2 points
  map.addSource(featureCollectionName, {
    type: 'geojson',
    data: featureCollection,
  });
  // Add a symbol layer
  map.addLayer({
    id: featureCollectionName,
    type: 'symbol',
    source: featureCollectionName,
    layout: {
      'icon-image': 'customPin',
    },
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', featureCollectionName, (e) => {
    // Copy coordinates array.
    const coordinates = (
      (e.features as MapboxGeoJSONFeature[])[0].geometry as Point
    ).coordinates.slice();

    const featureDescription = (e.features as MapboxGeoJSONFeature[])[0]
      .properties as FeatureDescription;

    new mapboxgl.Popup()
      .setLngLat(coordinates as [number, number])
      .setHTML(getPopupText(featureDescription))
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', featureCollectionName, () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', featureCollectionName, () => {
    map.getCanvas().style.cursor = '';
  });
};
