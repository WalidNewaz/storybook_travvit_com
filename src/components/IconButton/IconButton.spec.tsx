import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

test('should handle button click', () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <IconButton
      label="Button"
      icon={<span>Icon</span>}
      onClick={handleClick}
    />,
  );

  const button = getByText('Button');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('should render button with primary style', () => {
  const { container } = render(
    <IconButton label="Button" icon={<span>Icon</span>} primary />,
  );

  expect(container.firstChild).toHaveClass('primary');
});

test('should render button with custom size class', () => {
  const { container } = render(
    <IconButton label="Button" icon={<span>Icon</span>} size="large" />,
  );

  expect(container.firstChild).toHaveClass('px-6', 'py-3');
});

// Add more test cases as needed
