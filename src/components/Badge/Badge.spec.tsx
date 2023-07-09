import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Badge } from './index';

describe('Badge', () => {
  it('renders the label correctly', () => {
    const { getByText } = render(<Badge label="New" />);
    const labelElement = getByText('New');
    expect(labelElement).toBeInTheDocument();
  });

  it('applies the specified color class', () => {
    const { container } = render(<Badge label="Warning" color="yellow" />);
    const badgeElement = container.firstChild;
    expect(badgeElement).toHaveClass(
      'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
    );
  });

  it('applies the rounded class when rounded prop is true', () => {
    const { container } = render(<Badge label="Alert" rounded />);
    const badgeElement = container.firstChild;
    expect(badgeElement).toHaveClass('rounded-full');
  });
});
