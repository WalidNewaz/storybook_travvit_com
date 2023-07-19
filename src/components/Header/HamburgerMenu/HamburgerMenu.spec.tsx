import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HamburgerMenu } from './HamburgerMenu';

describe('HamburgerMenu', () => {
  test('should render hamburger menu with icon', () => {
    const onClick = jest.fn();
    const { getByLabelText } = render(
      <HamburgerMenu isOpen={false} onClick={onClick} />,
    );

    const toggleButton = getByLabelText('Toggle menu');
    expect(toggleButton).toBeInTheDocument();

    const icon = getByLabelText('Toggle icon');
    expect(icon).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
