import React from 'react';
import L, { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';

/** Components */
import Geoman from './Geoman';

const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

/**
 * Displays a placeholder when the map is loading.
 * @returns
 */
function MapPlaceholder() {
  return (
    <p>
      Map of London.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}

const MapEditor: React.FC<{
  geometry: any;
  setGeometry: React.Dispatch<any>;
}> = ({ geometry, setGeometry }) => {
  const position: LatLngTuple = [37.739236, -100.990251];
  const zoomLv = 5;

  return (
    <MapContainer
      center={position}
      zoom={zoomLv}
      scrollWheelZoom={true}
      placeholder={<MapPlaceholder />}
      className="w-full h-[75vh]"
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
        attribution={`
        <div class="mapbox-attribution-container">
          <a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>
          <a href="http://www.openstreetmap.org/copyright">© OpenStreetMap | </a>
          <a href="https://www.mapbox.com/map-feedback/" target="_blank"><strong>Improve this map</strong></a>
        </div>
        `}
        maxZoom={20}
      />
      <Geoman setGeometry={setGeometry} />
      {geometry && <GeoJSON data={JSON.parse(geometry)} />}
    </MapContainer>
  );
};

export default MapEditor;
