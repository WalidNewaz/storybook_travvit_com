import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon'; // Assuming the component is in a file named Icon.js

describe('Icon Component', () => {
  const mockIcon = <span>Test Icon</span>;

  it('renders the Icon component with the provided icon', () => {
    const { getByText } = render(<Icon icon={mockIcon} />);
    const iconElement = getByText('Test Icon'); // Adjust this based on your actual icon content

    expect(iconElement).toBeInTheDocument();
  });

  it('renders the Icon component with the correct classes', () => {
    const { container } = render(<Icon icon={mockIcon} />);
    const iconContainer = container.firstChild;

    expect(iconContainer).toHaveClass(
      'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10',
    );
  });
});
