/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MultiSelect from './MultiSelect';
jest.mock('./MultiSelect.css', () => {});

describe('MultiSelect', () => {
  test('renders options correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1'];
    const setSelectedOptions = jest.fn();

    const { getByText } = render(
      <MultiSelect
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    options.forEach((option) => {
      const optionElement = getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test('toggles option selection', async () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1'];
    const setSelectedOptions = jest.fn();

    const { getByText } = render(
      <MultiSelect
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const optionElement = getByText('Option 2');
    fireEvent.click(optionElement);

    await waitFor(() => {
      expect(setSelectedOptions).toHaveBeenCalledWith(['Option 1', 'Option 2']);
    });

    // fireEvent.click(optionElement); // deselect the option
    // await waitFor(() => {
    //   expect(setSelectedOptions).toHaveBeenCalledWith(['Option 1']);
    // });
  });

  test('removes option from selected options when clicked', async () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const selectedOptions = ['Option 1', 'Option 2'];
    const setSelectedOptions = jest.fn();

    const { getByText } = render(
      <MultiSelect
        options={options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />,
    );

    const optionElement = getByText('Option 2');
    fireEvent.click(optionElement);

    await waitFor(() => {
      expect(setSelectedOptions).toHaveBeenCalledWith(['Option 1']);
    });
  });
});
