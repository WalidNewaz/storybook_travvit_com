/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MultiSelectModal from './MultiSelectModal';
import '@testing-library/jest-dom/extend-expect';

// Add this mock to handle the CSS import
jest.mock('./MultiSelectModal.css', () => {});

describe('MultiSelectModal', () => {
  test('renders options correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1'];
    const setSelectedOptions = jest.fn();

    const { getByText } = render(
      <MultiSelectModal
        id="testId"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const inputElement = document.getElementById('testId') as HTMLInputElement;
    fireEvent.click(inputElement);

    options.forEach((option) => {
      const optionElement = getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test('toggles option selection', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1'];
    const setSelectedOptions = jest.fn();

    const { getByText } = render(
      <MultiSelectModal
        id="testId"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const inputElement = document.getElementById('testId') as HTMLInputElement;
    fireEvent.click(inputElement);

    const optionElement = getByText('Option 2');
    fireEvent.click(optionElement);

    // Check if setSelectedOptions was called with the expected array of options
    expect(setSelectedOptions).toHaveBeenCalledWith(['Option 1', 'Option 2']);
  });

  test('removes option from selected options when clicking on it', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1', 'Option 2'];
    const setSelectedOptions = jest.fn();

    const { getByText } = render(
      <MultiSelectModal
        id="testId"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const inputElement = document.getElementById('testId') as HTMLInputElement;
    fireEvent.click(inputElement);

    const optionElement = getByText('Option 2');
    fireEvent.click(optionElement);
    expect(setSelectedOptions).toHaveBeenCalledWith(['Option 1']);
  });

  test('closes modal when clicking outside', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1'];
    const setSelectedOptions = jest.fn();

    const { getByText, queryByText } = render(
      <MultiSelectModal
        id="testId"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const inputElement = document.getElementById('testId') as HTMLInputElement;
    fireEvent.click(inputElement);

    const modalContent = document.querySelector('.modal-content');
    fireEvent.click(modalContent as Element);

    // Check if the modal is still open
    expect(queryByText('Option 1')).toBeInTheDocument();

    const outsideElement = document.querySelector('.fixed');
    fireEvent.click(outsideElement as Element);

    // Check if the modal is closed after clicking outside
    expect(queryByText('Option 1')).not.toBeInTheDocument();
  });

  test('closes modal when clicking close button', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1'];
    const setSelectedOptions = jest.fn();

    const { queryByText, getByTestId } = render(
      <MultiSelectModal
        id="testId"
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const inputElement = document.getElementById('testId') as HTMLInputElement;
    fireEvent.click(inputElement);

    const closeButton: Element = getByTestId('close-button');
    fireEvent.click(closeButton);
    // Check if the modal is closed after clicking the close button
    expect(queryByText('Option 1')).not.toBeInTheDocument();
  });
});
