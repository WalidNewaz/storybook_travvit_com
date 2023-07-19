import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileLoginButton } from './MobileLoginButton';
import { FaSignInAlt } from 'react-icons/fa';

describe('MobileLoginButton', () => {
  test('should render mobile login button with label and icon', () => {
    const label = 'Log In';
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(
      <MobileLoginButton label={label} icon={FaSignInAlt} onClick={onClick} />,
    );

    const loginButton = getByText(label);
    expect(loginButton).toBeInTheDocument();

    const icon = getByTestId('icon-element');
    expect(icon).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
