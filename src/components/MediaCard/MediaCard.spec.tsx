import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MediaCard } from './MediaCard';

type MediaTypes = 'image' | 'video';

describe('MediaCard', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders image media correctly', () => {
    const props = {
      media: 'https://example.com/image.jpg',
      mediaType: 'image' as MediaTypes,
      alt: 'Example Image',
      description: 'Example Description',
      buttonText: 'Click Me',
      buttonOnClick: mockOnClick,
    };

    render(<MediaCard {...props} />);

    const mediaElement = screen.getByAltText('Example Image');
    expect(mediaElement).toBeInTheDocument();
    expect(mediaElement.tagName).toBe('IMG');

    const descriptionElement = screen.getByText('Example Description');
    expect(descriptionElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('renders video media correctly', () => {
    const props = {
      media: 'https://example.com/video.mp4',
      mediaType: 'video' as MediaTypes,
      alt: 'Example Video',
      description: 'Example Description',
      buttonText: 'Click Me',
      buttonOnClick: mockOnClick,
    };

    render(<MediaCard {...props} />);

    const mediaElement = screen.getByTestId('media-video');
    expect(mediaElement).toBeInTheDocument();
    expect(mediaElement.tagName).toBe('VIDEO');

    const descriptionElement = screen.getByText('Example Description');
    expect(descriptionElement).toBeInTheDocument();

    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('renders rounded card correctly', () => {
    const props = {
      rounded: true,
      media: 'https://example.com/image.jpg',
      mediaType: 'image' as MediaTypes,
      alt: 'Example Image',
      description: 'Example Description',
      buttonText: 'Click Me',
      buttonOnClick: mockOnClick,
    };

    render(<MediaCard {...props} />);

    const cardElement = screen.getByTestId('media-card');
    expect(cardElement).toHaveClass('rounded-3xl');
  });
});
