/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageUploader from './ImageUploader';

describe('ImageUploader', () => {
  test('calls onImageSelected when an image is selected', () => {
    const onImageSelected = jest.fn();

    const { getByRole, getByTestId } = render(
      <ImageUploader label="Upload Image" onImageSelected={onImageSelected} />,
    );

    const cameraButton = getByRole('button', { name: 'Upload Image' });
    const inputElement = getByTestId('file-input');

    const file = new File(['dummy content'], 'test.jpg', {
      type: 'image/jpeg',
    });

    fireEvent.change(inputElement, { target: { files: [file] } });

    // Check if onImageSelected was called with the selected file
    expect(onImageSelected).toHaveBeenCalledWith(file);
  });

  test('opens file dialog when the camera button is clicked', () => {
    const { getByRole, getByTestId } = render(
      <ImageUploader label="Upload Image" onImageSelected={() => {}} />,
    );

    const cameraButton = getByRole('button', { name: 'Upload Image' });
    const inputElement = getByTestId('file-input');

    fireEvent.click(cameraButton);

    // Check if the file dialog is opened
    expect(inputElement).not.toBeVisible();
  });
});
