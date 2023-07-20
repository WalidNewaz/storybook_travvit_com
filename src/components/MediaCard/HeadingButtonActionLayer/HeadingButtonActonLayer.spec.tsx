import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HeadingButtonActionLayer from './HeadingButtonActionLayer';

describe('HeadingButtonActionLayer', () => {
  const mockOnClick = jest.fn();

  it('renders heading and button with correct label', () => {
    const heading = 'Test Heading';
    const label = 'Test Button Label';

    const { getByText } = render(
      <HeadingButtonActionLayer
        heading={heading}
        label={label}
        onClick={mockOnClick}
      />,
    );

    const headingElement = getByText(heading);
    const buttonElement = getByText(label);

    expect(headingElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const heading = 'Test Heading';
    const label = 'Test Button Label';

    const { getByText } = render(
      <HeadingButtonActionLayer
        heading={heading}
        label={label}
        onClick={mockOnClick}
      />,
    );

    const buttonElement = getByText(label);
    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom class names', () => {
    const heading = 'Test Heading';
    const label = 'Test Button Label';
    const customClassName = 'custom-class';
    const customHeadingClassName = 'custom-heading-class';

    const { container } = render(
      <HeadingButtonActionLayer
        heading={heading}
        label={label}
        onClick={mockOnClick}
        className={customClassName}
        headingClassName={customHeadingClassName}
      />,
    );

    const headingButtonActionLayer = container.querySelector(
      '.heading-button-action-layer',
    );
    const headingElement = container.querySelector('.custom-heading-class');

    expect(headingButtonActionLayer).toHaveClass(customClassName);
    expect(headingElement).toBeInTheDocument();
  });
});
