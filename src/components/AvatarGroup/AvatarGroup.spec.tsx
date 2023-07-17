import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AvatarGroup } from './AvatarGroup';
import AvatarGroupProps from './AvatarGroup.interface';
import AvatarProps from '../Avatar/Avatar.interface';

// Define a mock AvatarComponent for testing
const MockAvatarComponent: React.FC<AvatarProps> = ({ src, size }) => (
  <img data-testid="avatar" className={`avatar-${size}`} {...{ src }} />
);

describe('AvatarGroup', () => {
  const renderAvatarGroup = (props: AvatarGroupProps) => {
    render(<AvatarGroup {...props} />);
  };

  const groupMembers = [
    { src: '/John' },
    { src: '/Jane' },
    { src: '/Alice' },
    { src: '/Bob' },
  ];

  it('renders the avatar group with the provided group members', () => {
    renderAvatarGroup({
      AvatarComponent: MockAvatarComponent,
      groupMembers,
    });

    const avatarElements = screen.getAllByTestId('avatar');
    expect(avatarElements).toHaveLength(3);

    avatarElements.forEach((avatarElement) => {
      expect(avatarElement).toHaveAttribute('src');
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
