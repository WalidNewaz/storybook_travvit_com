import React, { useState, useRef, useEffect } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import ImageUploader from './ImageUploader';
import MultiSelect from '../MultiSelect/MultiSelect';
import DropDown from '../DropDown/DropDown';
import MultiSelectDropDown from '../MultiSelectDropDown/MultiSelectDropDown';
import { Button } from '../../Button/Button';
import MapBox from '../../Map/MapBox/MapBox';
import CurrentPositionButton from '../../Map/CurrentPositionButton/CurrentPositionButton';
import { TravvitAddressType } from '../../../utils/map';

const SUBMIT_BTN_CLASSES = `
  flex justify-center
  bg-travvit-orange-900
  border-travvit-orange-900
  hover:bg-travvit-orange
  hover:border-travvit-orange`;

const PlaceName: React.FC<{
  setPlaceName: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ setPlaceName }) => {
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
          onChange={(e) => setPlaceName(e.target.value)}
        />
      </div>
    </div>
  );
};

const PlaceType: React.FC<{
  setPlaceType: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ setPlaceType }) => {
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
          setDropdownValue={setPlaceType}
        />
      </div>
    </div>
  );
};

const Description: React.FC<{
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

const Amenities = () => {
  return (
    <div className="col-span-full md:col-span-3">
      <label
        htmlFor="amenities"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Amenities
      </label>
      <div className="mt-2">
        <MultiSelectDropDown
          id="amenities"
          options={['Trail', 'Campsite', 'Mountain', 'Lake', 'River']}
        />
      </div>
    </div>
  );
};

const AccessibleSeasons: React.FC<{
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

const TakePhoto: React.FC<{
  onImageSelected: (image: File | null | undefined) => void;
}> = ({ onImageSelected }) => {
  return (
    <div className="col-span-full dt_small:col-span-1">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Upload photo
      </label>
      <div className="flex justify-center sm:justify-start mt-2 lg:mt-1">
        <ImageUploader onImageSelected={onImageSelected} />
      </div>
    </div>
  );
};

export default function AddPlaceForm() {
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>();
  const [selectedAddress, setSelectedAddress] = useState<TravvitAddressType>();
  const [isCurrentPosition, setIsCurrentPosition] = useState<boolean>(false);
  const [placeName, setPlaceName] = useState<string | null>('');
  const [placeType, setPlaceType] = useState<string | null>('');
  const [placeDescription, setPlaceDescription] = useState<string | null>('');
  const [seasons, setSeasons] = useState<string[]>([]);
  const [accessibleSeasons, setAccessibleSeasons] = useState<string[] | null>(
    [],
  );

  useEffect(() => {
    setSeasons(['summer', 'fall', 'winter', 'spring']);
  }, []);

  useEffect(() => {
    console.log('placeName', placeName);
    console.log('placeType', placeType);
    console.log('placeDescription', placeDescription);
    console.log('selectedAddress', selectedAddress);
    console.log('accessibleSeasons', accessibleSeasons);
  }, [
    selectedAddress,
    placeType,
    placeName,
    placeDescription,
    accessibleSeasons,
  ]);

  function onImageSelected(image: File | null | undefined) {
    setSelectedFile(image);
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="flex justify-center pb-8 text-gray-700">Add a place</h1>
        <form className="add-place">
          <div>
            <div className="border-b border-gray-900/10 pb-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <PlaceName setPlaceName={setPlaceName} />

                <PlaceType setPlaceType={setPlaceType} />

                <Description
                  placeDescription={placeDescription}
                  setPlaceDescription={setPlaceDescription}
                />

                <PlaceLocation
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                  isCurrentPosition={isCurrentPosition}
                />

                <CurrentPosition
                  setSelectedAddress={setSelectedAddress}
                  setIsCurrentPosition={setIsCurrentPosition}
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Amenities />

                <AccessibleSeasons
                  seasons={seasons}
                  accessibleSeasons={accessibleSeasons}
                  setAccessibleSeasons={setAccessibleSeasons}
                />

                <TakePhoto onImageSelected={onImageSelected} />
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
