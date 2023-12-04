/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Body from './Body'; // Assuming the component is in a file named Body.js

describe('Body Component', () => {
  const mockMessage = 'Test Body Content';

  it('renders the Body component with the provided message', () => {
    const { getByText } = render(<Body message={mockMessage} />);
    const bodyElement = getByText('Test Body Content');

    expect(bodyElement).toBeInTheDocument();
  });

  it('renders the Body component with the correct classes', () => {
    const { container } = render(<Body message={mockMessage} />);
    const bodyContainer = container.firstChild;

    // Adjust the class names based on your actual styling
    expect(bodyContainer).toHaveClass('mt-2');
    expect(bodyContainer?.firstChild).toHaveClass(
      'font-mono text-sm text-gray-500 whitespace-pre-wrap overflow-y-scroll overflow-x-auto max-h-60',
    );
  });
});
