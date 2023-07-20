import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import LinkHeadingActionLayer from './LinkHeadingActionLayer';

describe('LinkHeadingActionLayer', () => {
  const heading = 'Test Heading';
  const href = '/test-link';
  const customClassName = 'custom-class';

  it('renders heading and link with correct href', () => {
    const { getByText, getByRole } = render(
      <LinkHeadingActionLayer heading={heading} href={href} />,
    );

    const headingElement = getByText(heading);
    const linkElement = getByRole('link');

    expect(headingElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', href);
  });

  it('applies custom class name', () => {
    const { container } = render(
      <LinkHeadingActionLayer
        heading={heading}
        href={href}
        className={customClassName}
      />,
    );

    const headingElement = container.querySelector(`.${customClassName}`);

    expect(headingElement).toBeInTheDocument();
  });
});
