import React from 'react';

const PlaceName: React.FC<{
  setPlaceName: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ setPlaceName }) => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="place_name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Place name (required)*
      </label>
      <div className="mt-2">
        <input
          id="place_name"
          name="place_name"
          type="text"
          autoComplete="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setPlaceName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PlaceName;
