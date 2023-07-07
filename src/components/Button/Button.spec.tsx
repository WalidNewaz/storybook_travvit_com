import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

describe('Button', () => {
  it('renders the button with the correct label', () => {
    const label = 'Click Me';
    const { getByText } = render(<Button label={label} />);

    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });

  it('triggers the onClick event when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onClick={onClickMock} />,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('applies the primary style when primary prop is true', () => {
    const { container } = render(<Button label="Primary Button" primary />);

    const button = container.firstChild;
    expect(button).toHaveClass(
      'text-white bg-travvit-orange-800 border-travvit-orange-800',
    );
  });

  it('applies the correct size class based on the size prop', () => {
    const { container } = render(<Button label="Small Button" size="small" />);

    const button = container.firstChild;
    expect(button).toHaveClass('px-4 py-2.5');
  });

  it('applies the correct size class based on the large size prop', () => {
    const { container } = render(<Button label="Small Button" size="large" />);

    const button = container.firstChild;
    expect(button).toHaveClass('px-6 py-3');
  });

  it('applies additional custom classes passed through className prop', () => {
    const { container } = render(
      <Button label="Custom Button" className="custom-class1 custom-class2" />,
    );

    const button = container.firstChild;
    expect(button).toHaveClass('custom-class1 custom-class2');
  });
});
