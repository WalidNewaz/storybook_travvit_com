import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Button } from '../../Button/Button';
import { TravvitAddressType } from '../../../utils/map';
import PlaceName from './PlaceName';
import PlaceType from './PlaceType';
import PlaceDescription from './PlaceDescription';
import PlaceLocation from './PlaceLocation';
import CurrentPosition from './CurrentPosition';
import PlaceAmenities from './PlaceAmenities';
import PlaceAccessibleSeasons from './PlaceAccessibleSeasons';
import PlacePhoto from './PlacePhoto';
import ErrorListNotification from '../../Notification/ErrorListNotification';
import FormSubmissionOverlay from '../FormSubmissionOverlay/FormSubmissionOverlay';
import { FormStates } from '../enums';

const SUBMIT_BTN_CLASSES = `
  flex justify-center
  bg-travvit-orange-900
  border-travvit-orange-900
  hover:bg-travvit-orange
  hover:border-travvit-orange`;

const placeNameSchema = Yup.string()
  .min(5, 'Place name must be 5 characters or more')
  .required('Place name is required');

const placeTypeSchema = Yup.string()
  .min(3, 'Place type is invalid')
  .required('Place type is required');

const selectedAddressSchema = Yup.object().required(
  'Place location is required',
);

const AddPlaceForm: React.FC<{
  createPlace: any;
  formState: FormStates;
}> = ({ createPlace, formState }) => {
  const [selectedAddress, setSelectedAddress] = useState<TravvitAddressType>();
  const [isCurrentPosition, setIsCurrentPosition] = useState<boolean>(false);
  const [placeName, setPlaceName] = useState<string | null>('');
  const [placeTypes, setPlaceTypes] = useState<string[]>(['']);
  const [placeType, setPlaceType] = useState<string | null>('');
  const [placeDescription, setPlaceDescription] = useState<string | null>('');
  const [seasons, setSeasons] = useState<string[]>([]);
  const [accessibleSeasons, setAccessibleSeasons] = useState<string[] | null>(
    [],
  );
  const [amenities, setAmenities] = useState<string[] | null>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[] | null>(
    [],
  );
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    setPlaceTypes(['Trail', 'Park', 'Campsite', 'Mountain', 'Lake', 'River']);
    setSeasons(['summer', 'fall', 'winter', 'spring']);
    setAmenities(['camping', 'water', 'bathroom', 'parking']);
  }, []);

  useEffect(() => {
    if (formState === FormStates.SUCCEEDED) {
      setPlaceName('');
      setPlaceType('');
      setPlaceDescription('');
      setSelectedAddress(undefined);
      setSelectedAmenities([]);
      setAccessibleSeasons([]);
      setSelectedFile(undefined);
    }
  }, [formState]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    // Gather all form data
    const formData = {
      placeName,
      placeType,
      placeDescription,
      selectedAddress,
      selectedAmenities,
      accessibleSeasons,
      selectedFile,
    };

    // Perform any necessary actions with the form data, e.g., sending it to a server
    console.log(formData);

    const results = await Promise.allSettled([
      placeNameSchema.validate(placeName),
      placeTypeSchema.validate(placeType),
      selectedAddressSchema.validate(selectedAddress),
    ]);
    const errMsgs = results.reduce((acc, result) => {
      if (result.status === 'rejected') {
        acc.push(result.reason.message);
      }
      return acc;
    }, [] as string[]);
    setErrors((errors) => [...errors, ...errMsgs]);

    if (errMsgs.length === 0) {
      // setErrors((errors) => [...errors, ...errMsgs]);
      // setFormState(FormStates.LOADING);
      createPlace(formData);
      // setTimeout(() => {
      //   setFormState(FormStates.SUCCESS);
      //   // setErrors([]);
      // }, 5000);
    }
  };

  function onImageSelected(image: File | null | undefined) {
    setSelectedFile(image);
  }

  function onCloseNotification() {
    setErrors([]);
  }

  function addError(error: string) {
    setErrors((errors) => [...errors, error]);
  }

  return (
    <>
      <ErrorListNotification
        heading="Please fix the following before submitting:"
        listItems={errors}
        hidden={errors.length === 0}
        onClose={onCloseNotification}
        className="fixed md:max-w-screen-md lg:max-w-screen-lg dt_small:max-w-screen-dt_small dt_mid:max-w-screen-dt_mid"
      />
      <FormSubmissionOverlay
        formState={formState}
        hidden={formState !== FormStates.LOADING}
      />
      <div className="add-place flex flex-1 flex-col px-6 py-12 lg:px-8">
        <h1 className="flex justify-center pb-8 text-gray-700">Add a place</h1>
        <form className="add-place" onSubmit={handleFormSubmit}>
          <div>
            <div className="border-b border-gray-900/10 pb-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <PlaceName setPlaceName={setPlaceName} />

                <PlaceType
                  placeTypes={placeTypes}
                  setPlaceType={setPlaceType}
                />

                <PlaceDescription
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
                <PlaceAmenities
                  amenities={amenities}
                  selectedAmenities={selectedAmenities}
                  setSelectedAmenities={setSelectedAmenities}
                />

                <PlaceAccessibleSeasons
                  seasons={seasons}
                  accessibleSeasons={accessibleSeasons}
                  setAccessibleSeasons={setAccessibleSeasons}
                />

                <PlacePhoto onImageSelected={onImageSelected} />
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
};

export default AddPlaceForm;
