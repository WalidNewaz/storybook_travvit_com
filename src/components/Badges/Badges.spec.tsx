import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Badges from './Badges'; // Adjust the import path accordingly

// Define a sample badges object for testing
const sampleBadges = ['Badge 1', 'Badge 2', 'Badge 3'];

describe('Badges Component', () => {
  it('renders without errors', () => {
    const { container } = render(<Badges badges={sampleBadges} />);
    expect(container).toBeTruthy();
  });

  it('displays badges correctly', () => {
    const { getByText } = render(<Badges badges={sampleBadges} />);

    // Verify that each badge label is displayed
    for (const badgeLabel of Object.values(sampleBadges)) {
      expect(getByText(badgeLabel)).toBeInTheDocument();
    }
  });

  it('applies the specified class and color to each badge', () => {
    const { container } = render(<Badges badges={sampleBadges} />);
    const badges = container.querySelectorAll('.badge'); // Adjust the class name based on your Badge component

    // Check the class and color for each badge
    badges.forEach((badge, index) => {
      expect(badge).toHaveClass('m-1 whitespace-nowrap');
      expect(badge).toHaveClass('indigo'); // Adjust the color value based on your Badge component
    });
  });
});
