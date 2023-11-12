import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookmarkActionIcon from './BookmarkAction';

describe('BookmarkActionIcon', () => {
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button and icon correctly', () => {
    const { getByLabelText } = render(
      <BookmarkActionIcon
        label="Bookmark"
        onClick={onClickMock}
        className="custom-class"
      />,
    );

    const buttonElement = getByLabelText('Bookmark');
    const iconElement = buttonElement.querySelector('svg');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-slate-50');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('icon');
  });

  it('triggers the onClick callback when the button is clicked', () => {
    const { getByLabelText } = render(
      <BookmarkActionIcon
        label="Bookmark"
        onClick={onClickMock}
        className="custom-class"
      />,
    );

    const buttonElement = getByLabelText('Bookmark');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
