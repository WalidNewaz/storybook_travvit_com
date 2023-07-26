/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MapBox from './MapBox';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// Add this mock to handle the CSS import
jest.mock('mapbox-gl/dist/mapbox-gl.css', () => {});
jest.mock('@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css', () => {});

// Mock mapboxgl object
jest.mock('mapbox-gl', () => ({
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    setCenter: jest.fn(),
    setZoom: jest.fn(),
  })),
  GeolocateControl: jest.fn(),
  NavigationControl: jest.fn(),
}));

const mockOnFn = jest.fn();
const mockQueryFn = jest.fn();
// Mock MapboxGeocoder object
jest.mock('@mapbox/mapbox-gl-geocoder', () => {
  const MapboxGeocoder = jest.fn().mockImplementation(() => ({
    on: mockOnFn,
    query: mockQueryFn,
  }));
  return MapboxGeocoder;
});

// Mock getGeocodedAddress function
jest.mock('../../../utils/map', () => ({
  getGeocodedAddress: jest.fn().mockReturnValue({
    address: {
      geometry: {
        type: 'Point',
        coordinates: [12.345, 67.89],
      },
    },
    fullName: 'Mock Address',
  }),
}));

describe('MapBox', () => {
  test('renders correctly', () => {
    const setSelectedAddress = jest.fn();
    const { getByTestId } = render(
      <MapBox
        selectedAddress={undefined}
        setSelectedAddress={setSelectedAddress}
        isCurrentPosition={false}
      />,
    );

    const mapContainer = getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();
  });

  test.skip('updates map center and geocodes address on selectedAddress change', async () => {
    const setSelectedAddress = jest.fn();
    const selectedAddress = {
      fullName: 'Mock Address',
      address: {
        geometry: {
          type: 'Point',
          coordinates: [12.345, 67.89],
        },
      },
    };
    const { rerender } = render(
      <MapBox
        selectedAddress={undefined}
        setSelectedAddress={setSelectedAddress}
        isCurrentPosition={false}
      />,
    );

    rerender(
      <MapBox
        selectedAddress={undefined}
        setSelectedAddress={setSelectedAddress}
        isCurrentPosition={false}
      />,
    );

    await waitFor(() => {
      expect(setSelectedAddress).toHaveBeenCalledTimes(1);
      expect(setSelectedAddress).toHaveBeenCalledWith(selectedAddress);
      expect(mapboxgl.Map).toHaveBeenCalledTimes(1);
      expect(mapboxgl.Map).toHaveBeenCalledWith({
        container: expect.any(HTMLElement),
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [12.345, 67.89],
        zoom: 16,
        attributionControl: true,
      });
      expect(MapboxGeocoder).toHaveBeenCalledTimes(1);
      // expect(geoCoder?.on).toHaveBeenCalledTimes(1);
      // expect(geoCoder?.query).toHaveBeenCalledTimes(1);
      // expect(geoCoder?.query).toHaveBeenCalledWith('Mock Address');
      expect(
        document
          .querySelector('.mapboxgl-ctrl-geocoder--input')
          ?.getAttribute('value'),
      ).toBe('Mock Address');
    });
  });

  // Additional tests can be added here...
});
