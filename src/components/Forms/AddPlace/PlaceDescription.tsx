import React, { useState } from 'react';

const PlaceDescription: React.FC<{
  placeDescription: string | null;
  setPlaceDescription: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ placeDescription, setPlaceDescription }) => {
  const [textValue, setTextValue] = useState(placeDescription);

  return (
    <div className="col-span-full">
      <label
        htmlFor="description"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Description
      </label>
      <div className="mt-2">
        <textarea
          id="description"
          name="description"
          rows={3}
          value={textValue as string}
          onChange={(e) => setTextValue(e.target.value)}
          onBlur={(e) => setPlaceDescription(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">
        Write a few sentences about the place.
      </p>
    </div>
  );
};

export default PlaceDescription;
