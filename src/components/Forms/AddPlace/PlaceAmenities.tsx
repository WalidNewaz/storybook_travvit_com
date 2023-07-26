import React from 'react';
import MultiSelectModal from '../MultiSelectModal/MultiSelectModal';

const PlaceAmenities: React.FC<{
  amenities: string[] | null;
  selectedAmenities: string[] | null;
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[] | null>>;
}> = ({ amenities, selectedAmenities, setSelectedAmenities }) => {
  return (
    <div className="col-span-full md:col-span-3">
      <label
        htmlFor="amenities"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Amenities
      </label>
      <div className="mt-2">
        <MultiSelectModal
          id="amenities"
          options={amenities}
          selectedOptions={selectedAmenities}
          setSelectedOptions={setSelectedAmenities}
          placeholder="Select amenities"
        />
      </div>
    </div>
  );
};

export default PlaceAmenities;
