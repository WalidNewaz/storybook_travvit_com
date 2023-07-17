import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoryCard } from './CategoryCard';
import type { MediaType } from '../../../types';

describe('CategoryCard', () => {
  const mockProps = {
    mediaType: 'image' as MediaType,
    imageProps: {
      sources: [],
      src: '/test-image.jpg',
      alt: 'Test Image',
    },
    heading: 'Category Heading',
    href: '/category',
    className: 'custom-class',
  };

  it('renders the CategoryCard component with props', () => {
    render(<CategoryCard {...mockProps} />);

    const imageElement = screen.getByAltText('Test Image');
    const headingElement = screen.getByText('Category Heading');
    const linkElement = screen.getByRole('link', { name: 'Category Heading' });

    expect(imageElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/category');
    expect(linkElement).toHaveClass('link-heading-acton-layer');
  });

  // Add more test cases as needed
});
