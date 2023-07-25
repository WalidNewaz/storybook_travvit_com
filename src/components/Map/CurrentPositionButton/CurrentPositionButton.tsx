import React from 'react';
import { getReverseGeocodedAddress } from '../../../utils/map';
import CurrentPositionButtonProps from './CurrentPositionButton.interface';

/** Components */
import { IconButton } from '../../IconButton/IconButton';
import { BiCurrentLocation } from 'react-icons/bi';

const CurrentPositionButton: React.FC<CurrentPositionButtonProps> = ({
  setSelectedAddress,
  setIsCurrentPosition,
}) => {
  // Check if the geolocation button on the map is active
  // If it is, then we need to deactivate it
  const deactivateGeolocateControl = () => {
    const geolocateCtrl = document.querySelector(
      '.mapboxgl-ctrl-geolocate-background',
    ) as HTMLButtonElement | null;
    if (geolocateCtrl) {
      geolocateCtrl.click();
    }
  };

  const getCurrentPosition = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    // console.log('getCurrentPosition');
    event.preventDefault();
    // deactivateGeolocateControl();
    navigator.geolocation.getCurrentPosition(async (position) => {
      // console.log(position);
      const data = await getReverseGeocodedAddress(position);
      if (data) {
        setSelectedAddress(data);
        setIsCurrentPosition(true);
      }
    });
  };

  return (
    <IconButton
      className="current-position text-base flex bottom-0 right-0 mt-8"
      label="Current Position"
      icon={<BiCurrentLocation className="h-5 w-5" aria-hidden="true" />}
      onClick={getCurrentPosition}
      type="button"
      aria-label="Current Position"
    />
  );
};

export default CurrentPositionButton;
