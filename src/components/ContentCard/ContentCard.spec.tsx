import React from 'react';
import { render } from '@testing-library/react';
import ContentCard from './ContentCard';

describe('ContentCard', () => {
  it('renders without error', () => {
    render(<ContentCard />);
    // No assertions required as the component is expected to render without any content
  });

  // Add more test cases as needed
});
