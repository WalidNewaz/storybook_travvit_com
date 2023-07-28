import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FloatingActionButton from './FloatingActionButton';

const mockOnClick = jest.fn();
const mockIcon = <span>Mock Icon</span>;

test('renders FloatingActionButton correctly', () => {
  render(
    <FloatingActionButton
      onClick={mockOnClick}
      icon={mockIcon}
      position="bottom-right"
    />,
  );

  // Check if the button is rendered correctly
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('bg-travvit-orange-800');

  // Check if the icon is rendered correctly inside the button
  const iconElement = screen.getByText('Mock Icon');
  expect(iconElement).toBeInTheDocument();

  // Check if onClick is called when the button is clicked
  fireEvent.click(buttonElement);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

test('positions FloatingActionButton correctly: top-right', () => {
  render(
    <FloatingActionButton
      onClick={mockOnClick}
      icon={mockIcon}
      position="top-right"
    />,
  );

  const topRightElement = screen.getByRole('button').parentElement;
  expect(topRightElement).toHaveClass('top-4 right-4');
});

test('positions FloatingActionButton correctly: bottom-left', () => {
  render(
    <FloatingActionButton
      onClick={mockOnClick}
      icon={mockIcon}
      position="bottom-left"
    />,
  );

  const bottomLeftElement = screen.getByRole('button').parentElement;
  expect(bottomLeftElement).toHaveClass('bottom-4 left-4');
});

test('positions FloatingActionButton correctly: bottom-right', () => {
  render(
    <FloatingActionButton
      onClick={mockOnClick}
      icon={mockIcon}
      position="bottom-right"
    />,
  );

  const bottomRightElement = screen.getByRole('button').parentElement;
  expect(bottomRightElement).toHaveClass('bottom-4 right-4');
});

test('positions FloatingActionButton correctly: top-left', () => {
  render(
    <FloatingActionButton
      onClick={mockOnClick}
      icon={mockIcon}
      position="top-left"
    />,
  );

  const topLeftElement = screen.getByRole('button').parentElement;
  expect(topLeftElement).toHaveClass('top-4 left-4');
});
