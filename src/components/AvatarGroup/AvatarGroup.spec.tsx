import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

// Define a mock AvatarComponent for testing
const MockAvatarComponent: React.FC<any> = ({ name, size }) => (
  <div data-testid="avatar" className={`avatar-${size}`}>
    {name}
  </div>
);

describe('AvatarGroup', () => {
  const renderAvatarGroup = (props: AvatarGroupProps) => {
    render(<AvatarGroup {...props} />);
  };

  const groupMembers = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Alice' },
    { name: 'Bob' },
  ];

  it('renders the avatar group with the provided group members', () => {
    renderAvatarGroup({
      AvatarComponent: MockAvatarComponent,
      groupMembers,
    });

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements).toHaveLength(3);

    avatarElements.forEach((avatarElement, index) => {
      expect(avatarElement).toHaveTextContent(groupMembers[index].name);
    });
  });

  it('limits the number of avatars displayed based on the provided limit prop', () => {
    const limit = 2;

    renderAvatarGroup({
      AvatarComponent: MockAvatarComponent,
      groupMembers,
      limit,
    });

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements).toHaveLength(limit);

    groupMembers.slice(0, limit).forEach((member, index) => {
      expect(avatarElements[index]).toHaveTextContent(member.name);
    });
  });

  it('renders avatars with the specified size', () => {
    const size = 'large';

    renderAvatarGroup({
      AvatarComponent: MockAvatarComponent,
      groupMembers,
      size,
    });

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements).toHaveLength(3);

    avatarElements.forEach((avatarElement) => {
      expect(avatarElement).toHaveClass(`avatar-${size}`);
    });
  });
});
