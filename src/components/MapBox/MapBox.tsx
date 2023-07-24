import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import request from 'request';

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

      // Add the control to the map.
      map.current.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          reverseGeocode: true,
        }),
        'top-left',
      );
    }
  }, []);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      console.log(position.coords.accuracy);

      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;

      const response = await fetch(url);
      const features = await response.json();
      console.log(features);
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow" ref={mapContainer}></div>
      <div className="flex justify-center">
        <button
          className="bg-travvit-orange-900 hover:bg-travvit-orange-800 text-white font-bold py-2 px-4 rounded"
          onClick={getCurrentPosition}
        >
          Get Current Position
        </button>
      </div>
    </div>
  );
};

export default MapBox;
