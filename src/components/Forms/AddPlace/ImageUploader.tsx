import React, { useRef } from 'react';
import { IconButton } from '../../IconButton/IconButton';
import { FaCamera } from 'react-icons/fa6';

interface ImageUploaderProps {
  onImageSelected: (image: File | null | undefined) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    const selectedFile = event.target.files?.[0];
    onImageSelected(selectedFile);
  };

  const handleCameraButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />
      <IconButton
        label="Take Photo"
        icon={<FaCamera />}
        onClick={handleCameraButtonClick}
        className="text-base flex items-center"
      />
    </div>
  );
};

export default ImageUploader;
