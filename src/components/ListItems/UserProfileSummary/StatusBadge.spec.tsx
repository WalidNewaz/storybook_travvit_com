import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import StatusBadge, { UserStatus } from './StatusBadge';

describe('StatusBadge component', () => {
  test('renders badge with correct label and color for pending status', () => {
    const { getByText } = render(<StatusBadge status={UserStatus.PENDING} />);
    const badgeElement = getByText('Pending');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-blue-50');
  });

  test('renders badge with correct label and color for active status', () => {
    const { getByText } = render(<StatusBadge status={UserStatus.ACTIVE} />);
    const badgeElement = getByText('Active');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-green-50');
  });

  test('renders badge with correct label and color for archived status', () => {
    const { getByText } = render(<StatusBadge status={UserStatus.ARCHIVED} />);
    const badgeElement = getByText('Archived');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-red-50');
  });

  test('renders badge with correct label and color for suspended status', () => {
    const { getByText } = render(<StatusBadge status={UserStatus.SUSPENDED} />);
    const badgeElement = getByText('Suspended');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-purple-50');
  });

  test('renders badge with correct label and color for cancelled status', () => {
    const { getByText } = render(<StatusBadge status={UserStatus.CANCELLED} />);
    const badgeElement = getByText('Cancelled');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-gray-50');
  });
});
