import React from 'react';
import MapBox from '../../Map/MapBox/MapBox';
import { TravvitAddressType } from '../../../utils/map';

const PlaceLocation: React.FC<{
  selectedAddress: TravvitAddressType | undefined;
  setSelectedAddress: React.Dispatch<
    React.SetStateAction<TravvitAddressType | undefined>
  >;
  isCurrentPosition: boolean;
}> = ({ selectedAddress, setSelectedAddress, isCurrentPosition }) => {
  return (
    <div className="col-span-full w-full min-h-[30vh] mx-auto">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Location (required)*
      </label>
      <MapBox
        className="mt-2"
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
        isCurrentPosition={isCurrentPosition}
      />
    </div>
  );
};

export default PlaceLocation;
