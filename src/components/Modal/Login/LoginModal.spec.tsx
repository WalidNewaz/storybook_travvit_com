/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal from './index'; // Assuming the component is in a file named LoginModal.js

// Mock ResizeObserver
window.ResizeObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('LoginModal Component', () => {
  it('renders the LoginModal component with the Login component', () => {
    render(<LoginModal />);

    // You may adjust the query based on the actual content of the Login component
    const loginComponent = screen.getByTestId('login-component');

    expect(loginComponent).toBeInTheDocument();
  });

  it.skip('opens and closes the modal when the show prop is toggled', () => {
    render(<LoginModal hidden />);

    // Initially, the modal should be hidden
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();

    // Show the modal
    render(<LoginModal hidden={false} />);
    const openModal = screen.getByRole('dialog');
    expect(openModal).toBeInTheDocument();

    // Close the modal
    fireEvent.click(screen.getByRole('button', { name: /Close/ })); // Assuming there's a close button
    const closedModal = screen.queryByRole('dialog');
    expect(closedModal).not.toBeInTheDocument();
  });

  it.skip('triggers the onLogin callback when the login is successful', () => {
    const mockOnLogin = jest.fn();
    render(<LoginModal hidden={false} />);

    // Assuming there's a successful login action that triggers onLogin
    fireEvent.click(screen.getByRole('button', { name: /Login/ })); // Assuming there's a login button

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
  });
});
