import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShareActionIcon from '../ShareAction';

describe('ShareActionIcon', () => {
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button and icon correctly', () => {
    const { getByTestId } = render(
      <ShareActionIcon
        label="Share"
        onClick={onClickMock}
        className="custom-class"
      />,
    );

    const buttonElement = getByTestId('button-element');
    const iconElement = getByTestId('icon-element');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-slate-50');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('icon');
  });

  it('triggers the onClick callback when the button is clicked', () => {
    const { getByTestId } = render(
      <ShareActionIcon
        label="Share"
        onClick={onClickMock}
        className="custom-class"
      />,
    );

    const buttonElement = getByTestId('button-element');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
