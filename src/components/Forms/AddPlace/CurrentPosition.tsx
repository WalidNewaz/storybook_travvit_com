import React from 'react';
import { TravvitAddressType } from '../../../utils/map';
import CurrentPositionButton from '../../Map/CurrentPositionButton/CurrentPositionButton';

const CurrentPosition: React.FC<{
  setSelectedAddress: React.Dispatch<
    React.SetStateAction<TravvitAddressType | undefined>
  >;
  setIsCurrentPosition: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setSelectedAddress, setIsCurrentPosition }) => {
  return (
    <div className="col-span-full flex justify-center sm:justify-end">
      <CurrentPositionButton
        setSelectedAddress={setSelectedAddress}
        setIsCurrentPosition={setIsCurrentPosition}
      />
    </div>
  );
};

export default CurrentPosition;
