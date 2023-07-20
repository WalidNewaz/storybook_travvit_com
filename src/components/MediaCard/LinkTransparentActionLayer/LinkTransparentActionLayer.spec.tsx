import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import LinkTransparentActionLayer from './LinkTransparentActionLayer';

describe('LinkTransparentActionLayer', () => {
  const href = '/test-link';

  it('renders link with correct href', () => {
    const { getByRole } = render(<LinkTransparentActionLayer href={href} />);

    const linkElement = getByRole('link');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', href);
  });
});
