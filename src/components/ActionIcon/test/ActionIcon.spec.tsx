import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ActionIcon } from '../ActionIcon';
import TestIcon from './mocks/test-icon.svg';

describe.skip('ActionIcon', () => {
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the icon and label correctly', () => {
    render(
      <ActionIcon icon={TestIcon} label="Test Icon" onClick={onClickMock} />,
    );

    const buttonElement = screen.getByRole('button', { name: 'Test Icon' });
    const iconElement = screen.getByTestId('icon-element');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('icon');
    expect(buttonElement).toHaveAttribute('aria-label', 'Test Icon');
  });

  it('triggers the onClick callback when the button is clicked', () => {
    const { getByLabelText } = render(
      <ActionIcon icon={TestIcon} label="Test Icon" onClick={onClickMock} />,
    );

    const buttonElement = getByLabelText('Test Icon');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
