import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { Point } from 'geojson';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { getReverseGeocodedAddress } from '../../utils/map';

const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

const MapBox: React.FC<{ className?: string }> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  let geoCoder: MapboxGeocoder | null = null;

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
      geoCoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        reverseGeocode: false,
        placeholder: 'Search for a place',
        collapsed: false,
        countries: 'us,ca',
        marker: true,
      });
      map.current.addControl(geoCoder, 'top-left');
    }
  }, []);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const data = await getReverseGeocodedAddress(position);
      // console.log('data', data);
      if (mapContainer.current) {
        if (data) {
          const geometry: Point = data.address.geometry as Point;
          map.current?.setCenter(geometry.coordinates as [number, number]);
          map.current?.setZoom(16);
          geoCoder?.query(data.fullName);
        }
      }
    });
  };

  return (
    <div className={`map-box flex flex-col h-full ${className}`}>
      <div className="flex-grow" ref={mapContainer}></div>
      {/* <div className="flex justify-center">
        <button
          className="bg-travvit-orange-900 hover:bg-travvit-orange-800 text-white font-bold py-2 px-4 rounded"
          onClick={getCurrentPosition}
          type="button"
        >
          Get Current Position
        </button>
      </div> */}
    </div>
  );
};

export default MapBox;
