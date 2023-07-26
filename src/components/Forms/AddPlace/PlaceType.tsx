import React from 'react';
import DropDown from '../DropDown/DropDown';

const PlaceType: React.FC<{
  placeTypes: string[];
  setPlaceType: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ placeTypes, setPlaceType }) => {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor="place_type"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Type (required)*
      </label>
      <div className="mt-2">
        <DropDown
          options={placeTypes}
          id="place_type"
          setDropdownValue={setPlaceType}
        />
      </div>
    </div>
  );
};

export default PlaceType;
