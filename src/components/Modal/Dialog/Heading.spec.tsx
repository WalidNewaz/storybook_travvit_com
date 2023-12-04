/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Dialog } from '@headlessui/react';
import Heading from './Heading'; // Assuming the component is in a file named Heading.js

describe('Heading Component', () => {
  const mockHeading = 'Test Heading';

  it('renders the Heading component with the provided heading', () => {
    const { getByText } = render(
      <Dialog as="div" onClose={() => {}} open={true}>
        <Heading heading={mockHeading} />
      </Dialog>,
    );
    const headingElement = getByText('Test Heading');

    expect(headingElement).toBeInTheDocument();
  });
});
