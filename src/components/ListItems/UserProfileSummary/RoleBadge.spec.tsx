import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import RoleBadge, { UserRole } from './RoleBadge';

describe('RoleBadge component', () => {
  test('renders badge with correct label for admin role', () => {
    const { getByText } = render(<RoleBadge role={UserRole.ADMIN} />);
    const badgeElement = getByText('Admin');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-purple-50'); // Assuming 'purple' color corresponds to this class
  });

  test('renders badge with correct label for user role', () => {
    const { getByText } = render(<RoleBadge role={UserRole.USER} />);
    const badgeElement = getByText('User');
    expect(badgeElement).toBeInTheDocument();
    // Add additional assertions for class or color if needed
  });
});
