import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddActionIcon from './AddAction';

describe('AddActionIcon', () => {
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button and icon correctly', () => {
    const { getByTestId } = render(
      <AddActionIcon
        label="Add"
        onClick={onClickMock}
        className="custom-class"
      />,
    );

    const buttonElement = getByTestId('button-element-Add');
    const iconElement = getByTestId('icon-element-Add');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-slate-50');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('icon');
  });

  it('triggers the onClick callback when the button is clicked', () => {
    const { getByTestId } = render(
      <AddActionIcon
        label="Add"
        onClick={onClickMock}
        className="custom-class"
      />,
    );

    const buttonElement = getByTestId('button-element-Add');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
