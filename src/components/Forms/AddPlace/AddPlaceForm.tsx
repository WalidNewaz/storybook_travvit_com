import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import MultiSelect from '../MultiSelect/MultiSelect';
import DropDown from '../DropDown/DropDown';
import MultiSelectDropDown from '../MultiSelectDropDown/MultiSelectDropDown';
import { Button } from '../../Button/Button';
import MapBox from '../../Map/MapBox';
import CurrentPositionButton from '../../Map/CurrentPositionButton';

const defaultFeature = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-104.990251, 39.739236],
    interpolated: true,
  },
};

const SUBMIT_BTN_CLASSES = `
  flex justify-center
  bg-travvit-orange-900
  border-travvit-orange-900
  hover:bg-travvit-orange
  hover:border-travvit-orange`;

const PlaceName = () => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="email"
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
        />
      </div>
    </div>
  );
};

const PlaceType = () => {
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
          options={['Trail', 'Park', 'Campsite', 'Mountain', 'Lake', 'River']}
          id="place_type"
        />
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="col-span-full">
      <label
        htmlFor="about"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Description
      </label>
      <div className="mt-2">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">
        Write a few sentences about the place.
      </p>
    </div>
  );
};

const PlaceLocation = () => {
  return (
    <div className="col-span-full w-full min-h-[30vh] mx-auto">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Location (required)*
      </label>
      <MapBox className="mt-2" />
    </div>
  );
};

const CurrentPosition = () => {
  return (
    <div className="col-span-full flex justify-center sm:justify-end">
      <CurrentPositionButton />
    </div>
  );
};

export default function AddPlaceForm() {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [feature, setFeature] = useState<any>(defaultFeature);
  const [showValidationText, setShowValidationText] = useState(false);
  // const [token, setToken] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>();

  function onImageSelected(image: File | null | undefined) {
    setSelectedFile(image);
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="flex justify-center pb-8 text-gray-700">Add a place</h1>
        <form className="add-place">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <PlaceName />

                <PlaceType />

                <Description />

                <PlaceLocation />

                <CurrentPosition />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Amenities
                  </h2>
                  <MultiSelectDropDown
                    options={['Trail', 'Campsite', 'Mountain', 'Lake', 'River']}
                  />
                </div>
              </div>

              <div className="col-span-full flex justify-center my-4 flex-col">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Accessible seasons
                </h2>
                <MultiSelect
                  options={['summer', 'fall', 'winter', 'spring']}
                  className="py-1.5"
                />
              </div>

              <div className="col-span-full flex justify-center mt-8">
                <ImageUploader onImageSelected={onImageSelected} />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button label="Cancel" type="submit" />
            <Button
              primary
              label="Save"
              className={SUBMIT_BTN_CLASSES}
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
