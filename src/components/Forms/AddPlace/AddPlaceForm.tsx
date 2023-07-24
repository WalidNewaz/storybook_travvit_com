import React, { useState, useEffect, useCallback } from 'react';
import {
  AddressAutofill,
  AddressMinimap,
  useConfirmAddress,
  config,
} from '@mapbox/search-js-react';
import { FeatureCollection } from 'geojson';
import { FiMapPin } from 'react-icons/fi';
import ImageUploader from './ImageUploader';
import MultiSelect from '../MultiSelect/MultiSelect';
import DropDown from '../DropDown/DropDown';
import MultiSelectDropDown from '../MultiSelectDropDown/MultiSelectDropDown';
import { Button } from '../../Button/Button';

const MAPBOX_ACCESS_TOKEN: string = process.env.MAPBOX_ACCESS_TOKEN as string;

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

export default function AddPlaceForm() {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showMinimap, setShowMinimap] = useState(true);
  const [feature, setFeature] = useState<any>(defaultFeature);
  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>();

  useEffect(() => {
    const accessToken = MAPBOX_ACCESS_TOKEN;
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  const { formRef, showConfirm } = useConfirmAddress({
    minimap: true,
    skipConfirmModal: (feature) => {
      return ['exact', 'high'].includes(
        feature.properties.match_code.confidence,
      );
    },
  });

  const handleRetrieve = useCallback(
    (res: FeatureCollection) => {
      console.log('res: ', res);
      const feature = res.features[0];
      // console.log('feature: ', feature);
      setFeature(feature);
      setShowMinimap(true);
      setShowFormExpanded(true);
    },
    [setFeature, setShowMinimap],
  );

  const handleSubmit = useCallback(
    async (e: Event) => {
      e.preventDefault();
      const result = await showConfirm();
      if (result.type === 'nochange') submitForm();
    },
    [showConfirm],
  );

  function submitForm() {
    setShowValidationText(true);
    setTimeout(() => {
      resetForm();
    }, 2500);
  }

  function resetForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => (input.value = ''));
    setShowFormExpanded(false);
    setShowValidationText(false);
    setFeature(null);
  }

  function onImageSelected(image: File | null | undefined) {
    setSelectedFile(image);
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="flex justify-center pb-8 text-gray-700">Add a place</h1>
        <form className="add-place" ref={formRef} onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              {/* <h2 className="text-base font-semibold leading-7 text-gray-900">
                Place details
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide some information about this place.
              </p> */}

              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <PlaceName />

                <Description />

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Location (required)*
                  </label>
                  <div className="mt-2 relative">
                    <AddressAutofill
                      accessToken={MAPBOX_ACCESS_TOKEN}
                      onRetrieve={handleRetrieve}
                    >
                      <input
                        id="place_name"
                        name="place_name"
                        type="text"
                        placeholder="Start typing an address..."
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </AddressAutofill>
                    <div className="pr-3 items-center flex right-0 top-0 bottom-0 absolute pointer-events-none">
                      <FiMapPin className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4 w-[85vw] h-[30vh] mx-auto">
                  <AddressMinimap
                    canAdjustMarker={false}
                    satelliteToggle={true}
                    feature={feature}
                    show={showMinimap}
                    footer={true}
                    // onSaveMarkerLocation={handleSaveMarkerLocation}
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Type (required)*
                  </h2>
                  <DropDown
                    options={['Trail', 'Campsite', 'Mountain', 'Lake', 'River']}
                  />
                </div>
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
