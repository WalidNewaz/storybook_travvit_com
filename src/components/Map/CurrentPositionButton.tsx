import React from 'react';

/** Components */
import { IconButton } from '../../components/IconButton/IconButton';
import { BiCurrentLocation } from 'react-icons/bi';

const CurrentPositionButton: React.FC = () => {
  return (
    <IconButton
      className="current-position flex bottom-0 right-0 m-4"
      label="Current Position"
      icon={<BiCurrentLocation className="icon" aria-hidden="true" />}
    />
  );
};

export default CurrentPositionButton;
