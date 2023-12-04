/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Actions from './Actions'; // Assuming the component is in a file named Actions.js

describe('Actions Component', () => {
  const mockOnProceed = jest.fn();
  const mockOnDismiss = jest.fn();
  const mockSetOpen = jest.fn();

  const defaultProps = {
    proceedButtonText: 'Proceed',
    onProceed: mockOnProceed,
    dismissButtonText: 'Dismiss',
    onDismiss: mockOnDismiss,
    setOpen: mockSetOpen,
    cancelButtonRef: { current: null },
  };

  it('renders the Actions component with the provided button labels', () => {
    const { getByText } = render(<Actions {...defaultProps} />);
    const proceedButton = getByText('Proceed');
    const dismissButton = getByText('Dismiss');

    expect(proceedButton).toBeInTheDocument();
    expect(dismissButton).toBeInTheDocument();
  });

  it('calls the onProceed function and setOpen when the proceed button is clicked', () => {
    const { getByText } = render(<Actions {...defaultProps} />);
    const proceedButton = getByText('Proceed');

    fireEvent.click(proceedButton);

    expect(mockOnProceed).toHaveBeenCalledTimes(1);
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });

  it('calls the onDismiss function and setOpen when the dismiss button is clicked', () => {
    const { getByText } = render(<Actions {...defaultProps} />);
    const dismissButton = getByText('Dismiss');

    fireEvent.click(dismissButton);

    expect(mockOnDismiss).toHaveBeenCalledTimes(1);
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
