import React from 'react';
import MultiSelect from '../MultiSelect/MultiSelect';

const PlaceAccessibleSeasons: React.FC<{
  seasons: string[];
  accessibleSeasons: string[] | null;
  setAccessibleSeasons: React.Dispatch<React.SetStateAction<string[] | null>>;
}> = ({ seasons, accessibleSeasons, setAccessibleSeasons }) => {
  return (
    <div className="col-span-full md:col-span-3 lg:col-span-3 dt_small:col-span-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Accessible seasons
      </label>
      <div className="flex justify-center sm:justify-start mt-2 sm:mt-0">
        <MultiSelect
          options={seasons}
          className="py-1.5"
          selectedOptions={accessibleSeasons}
          setSelectedOptions={setAccessibleSeasons}
        />
      </div>
    </div>
  );
};

export default PlaceAccessibleSeasons;
