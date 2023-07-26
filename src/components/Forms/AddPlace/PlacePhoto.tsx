import React from 'react';
import ImageUploader from '../ImageUploader/ImageUploader';

const PlacePhoto: React.FC<{
  onImageSelected: (image: File | null | undefined) => void;
}> = ({ onImageSelected }) => {
  return (
    <div className="col-span-full dt_small:col-span-1">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Upload photo
      </label>
      <div className="flex justify-center sm:justify-start mt-2 lg:mt-1">
        <ImageUploader onImageSelected={onImageSelected} label="Take a photo" />
      </div>
    </div>
  );
};

export default PlacePhoto;
