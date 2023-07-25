import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers

import CurrentPositionButton from './CurrentPositionButton';

// Mock the map module
jest.mock('../../../utils/map');

describe('CurrentPositionButton', () => {
  test('renders correctly', () => {
    const setSelectedAddress = jest.fn();
    const { getByLabelText } = render(
      <CurrentPositionButton setSelectedAddress={setSelectedAddress} />,
    );

    const buttonElement = getByLabelText('Current Position');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toContainHTML('<svg ...'); // You can check if the BiCurrentLocation icon is rendered as expected
  });

  test('clicking the button triggers geolocation', async () => {
    const setSelectedAddress = jest.fn().mockName('setSelectedAddress');

    Object.defineProperty(global.navigator, 'geolocation', {
      value: {},
    });
    Object.defineProperty(global.navigator.geolocation, 'getCurrentPosition', {
      value: jest.fn().mockImplementation((successCallback) => {
        const position = {
          coords: {
            latitude: 12.34,
            longitude: 56.78,
          },
        };
        successCallback(position);
      }),
    });

    const { getByLabelText } = render(
      <CurrentPositionButton setSelectedAddress={setSelectedAddress} />,
    );

    const buttonElement = getByLabelText('Current Position');
    fireEvent.click(buttonElement);

    // Wait for the asynchronous getCurrentPosition to complete
    await waitFor(() => {
      // Check if the geolocation function is called
      expect(
        global.navigator.geolocation.getCurrentPosition,
      ).toHaveBeenCalled();
      // Check if setSelectedAddress is called with the expected data
      expect(setSelectedAddress).toHaveBeenCalledWith({
        latitude: 12.34,
        longitude: 56.78,
      });
    });
  });
});
