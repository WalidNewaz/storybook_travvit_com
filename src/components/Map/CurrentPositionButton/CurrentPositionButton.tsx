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
  const getCurrentPosition = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(async (position) => {
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
