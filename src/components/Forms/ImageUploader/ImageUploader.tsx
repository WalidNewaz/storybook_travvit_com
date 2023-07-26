import React, { useRef } from 'react';
import { IconButton } from '../../IconButton/IconButton';
import { FaCamera } from 'react-icons/fa6';
import ImageUploaderProps from './ImageUploader.interface';

/**
 * This component renders a button that opens a file dialog when clicked.
 * @param label the button label
 * @param onImageSelected the callback function to be called when an image is selected
 * @returns a JSX component
 */
const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  onImageSelected,
}) => {
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
        data-testid="file-input"
      />
      <IconButton
        label={label}
        icon={<FaCamera />}
        onClick={handleCameraButtonClick}
        className="text-base flex items-center"
      />
    </div>
  );
};

export default ImageUploader;
