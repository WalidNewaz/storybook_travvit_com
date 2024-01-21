import React from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import Geoman from './Geoman';

const MapEditor: React.FC<{
  geometry: any;
  setGeometry: React.Dispatch<any>;
}> = ({ geometry, setGeometry }) => {
  const position: LatLngTuple = [48.863247, 2.350747];
  const zoomLv = 13;

  return (
    <MapContainer
      center={position}
      zoom={zoomLv}
      scrollWheelZoom={true}
      className="w-full h-[85vh]"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        maxZoom={20}
      />
      <Geoman geometry={geometry} setGeometry={setGeometry} />
    </MapContainer>
  );
};

export default MapEditor;
