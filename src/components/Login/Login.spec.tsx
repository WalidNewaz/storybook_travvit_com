import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Login } from './Login';

// Mock the onLogin function
const mockOnLogin = jest.fn();

describe('Login', () => {
  test('should render login form and submit successfully', async () => {
    const { getByLabelText, getByText } = render(
      <Login onLogin={mockOnLogin} />,
    );

    // Fill in form fields
    const emailInput = getByLabelText('Email address');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(loginButton);

    // Wait for form submission to complete
    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalledTimes(1);
      expect(mockOnLogin).toHaveBeenCalledWith(
        'test@example.com',
        'password123',
      );
    });
  });

  // Add more test cases as needed
});
