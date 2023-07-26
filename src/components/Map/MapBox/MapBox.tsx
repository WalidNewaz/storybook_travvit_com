import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { Point } from 'geojson';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapBoxProps from './MapBox.interface';
import { getGeocodedAddress, TravvitAddressType } from '../../../utils/map';

const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

const MapBox: React.FC<MapBoxProps> = ({
  selectedAddress,
  setSelectedAddress,
  isCurrentPosition,
  className,
}) => {
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
      geoCoder.on('result', (e) => {
        const address = getGeocodedAddress(e.result);
        setSelectedAddress(address as TravvitAddressType);
      });
      map.current.addControl(geoCoder, 'top-left');
    }
  }, []);

  useEffect(() => {
    if (selectedAddress && isCurrentPosition) {
      const geometry: Point = selectedAddress?.address?.geometry as Point;
      map.current?.setCenter(geometry.coordinates as [number, number]);
      map.current?.setZoom(16);
      geoCoder?.query(selectedAddress.fullName);

      const geoCoderInput: HTMLInputElement | null = document.querySelector(
        '.mapboxgl-ctrl-geocoder--input',
      );
      (geoCoderInput as HTMLInputElement)?.setAttribute(
        'value',
        selectedAddress.fullName,
      );
    }
  }, [selectedAddress]);

  return (
    <div className={`map-box flex flex-col h-full ${className}`}>
      <div
        className="flex-grow"
        ref={mapContainer}
        data-testid="map-container"
      ></div>
    </div>
  );
};

export default MapBox;
