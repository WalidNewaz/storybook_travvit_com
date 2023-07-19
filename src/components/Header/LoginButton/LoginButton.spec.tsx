import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginButton } from './LoginButton';
import { FaSignInAlt } from 'react-icons/fa';

describe('LoginButton', () => {
  test('should render login button with label and icon', () => {
    const label = 'Log In';
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(
      <LoginButton label={label} icon={FaSignInAlt} onClick={onClick} />,
    );

    const loginButton = getByText(label);
    expect(loginButton).toBeInTheDocument();

    const icon = getByTestId('login-icon');
    expect(icon).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
