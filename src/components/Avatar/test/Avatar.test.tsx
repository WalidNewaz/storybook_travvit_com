import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Avatar, AvatarProps } from '../Avatar';

describe('Avatar', () => {
  const renderAvatar = (props: AvatarProps) => {
    render(<Avatar {...props} />);
  };

  it('renders the avatar with the provided source and alt text', () => {
    const src = 'https://example.com/avatar.png';
    const alt = 'User Avatar';

    renderAvatar({ src, alt });

    const avatarImage = screen.getByAltText(alt) as HTMLImageElement;
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.src).toBe(src);
  });

  it('renders the avatar with the default size if no size prop is provided', () => {
    const src = 'https://example.com/avatar.png';

    renderAvatar({ src });

    const defaultSizeClass = 'h-12 w-12'; // Assuming 'small' is the default size
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toHaveClass(defaultSizeClass);
  });

  it('renders the avatar with the specified size', () => {
    const src = 'https://example.com/avatar.png';
    const size = 'large';

    renderAvatar({ src, size });

    const sizeClass = 'h-36 w-36';
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toHaveClass(sizeClass);
  });
});
