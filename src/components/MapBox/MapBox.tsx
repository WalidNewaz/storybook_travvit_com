import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

const MapBox: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-104.990251, 39.739236],
        zoom: 16,
        attributionControl: true,
      });

      // Add geolocate control to the map.
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
          showUserLocation: true,
        }),
      );

      map.current.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
        }),
      );
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow" ref={mapContainer}></div>
    </div>
  );
};

export default MapBox;
