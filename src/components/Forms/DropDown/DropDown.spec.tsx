import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import DropDown from './DropDown';

describe('DropDown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const placeholder = 'Select an option';
  const setDropdownValue = jest.fn();

  test('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(
      <DropDown
        id="dropdown"
        options={options}
        placeholder={placeholder}
        setDropdownValue={setDropdownValue}
      />,
    );

    const dropdownInput = getByPlaceholderText(placeholder);
    expect(dropdownInput).toBeInTheDocument();
  });

  test('opens the menu when the input is clicked', () => {
    const { getByPlaceholderText, getByText } = render(
      <DropDown
        id="dropdown"
        options={options}
        placeholder={placeholder}
        setDropdownValue={setDropdownValue}
      />,
    );

    const dropdownInput = getByPlaceholderText(placeholder);
    fireEvent.click(dropdownInput);

    const menu = getByText(options[0]);
    expect(menu).toBeInTheDocument();
  });

  test('selects an option from the menu when clicked', async () => {
    const { getByPlaceholderText, getByText } = render(
      <DropDown
        id="dropdown"
        options={options}
        placeholder={placeholder}
        setDropdownValue={setDropdownValue}
      />,
    );

    const dropdownInput = getByPlaceholderText(placeholder);
    fireEvent.click(dropdownInput);

    const optionToSelect = options[1];
    const optionElement = getByText(optionToSelect);
    fireEvent.click(optionElement);

    await waitFor(() => {
      expect(setDropdownValue).toHaveBeenCalledWith(optionToSelect);
    });
  });

  test('closes the menu after selecting an option', () => {
    const { getByPlaceholderText, queryByText, getByTestId } = render(
      <DropDown
        id="dropdown"
        options={options}
        placeholder={placeholder}
        setDropdownValue={setDropdownValue}
      />,
    );

    const dropdownInput = getByPlaceholderText(placeholder);
    fireEvent.click(dropdownInput);

    const optionElement = getByTestId(`menu-item-${2}`);
    fireEvent.click(optionElement);

    const menu = queryByText(options[0]);
    expect(menu).toBeNull();
  });

  test('displays the selected option', () => {
    const selectedOption = 'Option 2';
    const { getByPlaceholderText, getByTestId } = render(
      <DropDown
        id="dropdown"
        options={options}
        placeholder={placeholder}
        setDropdownValue={setDropdownValue}
      />,
    );

    const dropdownInput = getByPlaceholderText(placeholder);
    fireEvent.click(dropdownInput);

    const optionElement = getByTestId(`menu-item-${1}`);
    fireEvent.click(optionElement);

    expect(dropdownInput).toHaveValue(selectedOption);
  });
});
