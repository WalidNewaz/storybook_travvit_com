import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuItem } from './MenuItem';
import { AiOutlineHome } from 'react-icons/ai';
import '@testing-library/jest-dom/extend-expect';

describe('MenuItem', () => {
  it('renders correctly with a link', () => {
    const handleClick = jest.fn();
    const { getByText, getByLabelText } = render(
      <MenuItem
        icon={AiOutlineHome}
        label="Home"
        href="/home"
        onClick={handleClick}
        iconLabel="Home Icon"
      />,
    );

    const linkElement = getByText('Home');
    const iconElement = getByLabelText('Home Icon');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('text-gray-600');

    fireEvent.click(linkElement);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders correctly with a button', () => {
    const handleClick = jest.fn();
    const { getByText, getByLabelText } = render(
      <MenuItem
        icon={AiOutlineHome}
        label="Home"
        onClick={handleClick}
        iconLabel="Home Icon"
      />,
    );

    const buttonElement = getByText('Home');
    const iconElement = getByLabelText('Home Icon');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('text-gray-600');

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
