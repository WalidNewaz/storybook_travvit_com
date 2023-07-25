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
  setIsCurrentPosition,
  className,
  mapInstance,
  geocoderInstance,
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
      // const map = new mapboxgl.Map({
      //   container: mapContainer.current,
      //   style: 'mapbox://styles/mapbox/streets-v12',
      //   center: [-104.990251, 39.739236],
      //   zoom: 16,
      //   attributionControl: true,
      // });
      // mapInstance = map;

      // // Add geolocate control to the map.
      // mapInstance.addControl(
      //   new mapboxgl.GeolocateControl({
      //     positionOptions: {
      //       enableHighAccuracy: true,
      //     },
      //     // When active the map will receive updates to the device's location as it changes.
      //     trackUserLocation: true,
      //     // Draw an arrow next to the location dot to indicate which direction the device is heading.
      //     showUserHeading: true,
      //     showUserLocation: true,
      //   }),
      // );

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
        // console.log('result', e);
        const address = getGeocodedAddress(e.result);
        // console.log('address', address);
        setSelectedAddress(address as TravvitAddressType);
      });
      map.current.addControl(geoCoder, 'top-left');
    }

    // if (!geocoderInstance && mapInstance) {
    //   const geocoder = new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl,
    //     reverseGeocode: false,
    //     placeholder: 'Search for a place',
    //     collapsed: false,
    //     countries: 'us,ca',
    //     marker: true,
    //   });
    //   geocoder.on('result', (e) => {
    //     // console.log('result', e);
    //     const address = getGeocodedAddress(e.result);
    //     // console.log('address', address);
    //     setSelectedAddress(address as TravvitAddressType);
    //   });
    //   mapInstance.addControl(geocoder, 'top-left');
    //   geocoderInstance = geocoder;
    // }

    return () => {
      // Clean up the map and geocoder instances if needed.
      // if (mapInstance && !mapInstance.isStyleLoaded()) {
      //   mapInstance.remove();
      // }
      // if (geocoderInstance) {
      //   mapInstance?.removeControl(geocoderInstance);
      // }
    };
  }, [mapInstance, geocoderInstance]);

  useEffect(() => {
    if (selectedAddress && isCurrentPosition) {
      console.log('currentPosition', selectedAddress);
      const geometry: Point = selectedAddress?.address?.geometry as Point;
      map.current?.setCenter(geometry.coordinates as [number, number]);
      map.current?.setZoom(16);
      geoCoder?.query(selectedAddress.fullName);
      const geolocateCtrl: HTMLButtonElement | Element | null =
        document.getElementsByClassName('mapboxgl-ctrl-geolocate')[0];
      (geolocateCtrl as HTMLButtonElement)?.click();
      const geoCoderInput: HTMLInputElement | null = document.querySelector(
        '.mapboxgl-ctrl-geocoder--input',
      );
      (geoCoderInput as HTMLInputElement)?.setAttribute(
        'value',
        selectedAddress.fullName,
      );
    }
  }, [selectedAddress]);

  // useEffect(() => {
  //   if (selectedAddress && isCurrentPosition) {
  //     console.log('currentPosition', selectedAddress);
  //     const geometry: Point = selectedAddress?.address?.geometry as Point;
  //     mapInstance?.setCenter(geometry.coordinates as [number, number]);
  //     mapInstance?.setZoom(16);
  //     geocoderInstance?.query(selectedAddress.fullName);

  //     // Use DOM manipulation sparingly. If there is an API to update the value of the input, use it.
  //     const geocoderInput = document.querySelector(
  //       '.mapboxgl-ctrl-geocoder--input',
  //     ) as HTMLInputElement | null;
  //     if (geocoderInput) {
  //       geocoderInput.value = selectedAddress.fullName;
  //     }
  //     const geolocateCtrl = document.querySelector(
  //       '.mapboxgl-ctrl-geolocate',
  //     ) as HTMLButtonElement | null;
  //     if (geolocateCtrl) {
  //       geolocateCtrl.click();
  //     }
  //     setIsCurrentPosition(false);
  //   }
  // }, [selectedAddress]);

  return (
    <div className={`map-box flex flex-col h-full ${className}`}>
      <div className="flex-grow" ref={mapContainer}></div>
    </div>
  );
};

export default MapBox;
