import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { MediaCard } from './MediaCard';
import HeadingButtonActionLayer from './HeadingButtonActionLayer/HeadingButtonActionLayer';

type MediaTypes = 'image' | 'video';

describe('MediaCard', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders image media correctly', () => {
    const imgSources = [
      {
        type: 'image/jpeg',
        srcSet: 'https://example.com/image.jpeg',
      },
      {
        type: 'image/webp',
        srcSet: 'https://example.com/image.webp',
      },
    ];

    const imageProps = {
      sources: imgSources,
      src: 'https://example.com/image.jpeg',
      alt: 'Example Image',
      className: 'rounded-3xl',
    };

    const props = {
      imageProps,
      mediaType: 'image' as MediaTypes,
      actionLayer: (
        <HeadingButtonActionLayer
          heading="Example Description"
          label="Click Me"
          onClick={mockOnClick}
        />
      ),
      mediaStyle: { height: '90vh' },
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
    const videoSources = [
      { src: 'https://example.com/video.webm', type: 'video/webm' },
      { src: 'https://example.com/video.mp4', type: 'video/mp4' },
    ];

    const videoProps = {
      sources: videoSources,
      requiredMediaType: 'video/webm',
      controls: true,
      autoPlay: true,
      className: 'rounded-3xl',
    };

    const props = {
      videoProps,
      mediaType: 'video' as MediaTypes,
      actionLayer: (
        <HeadingButtonActionLayer
          heading="Example Description"
          label="Click Me"
          onClick={mockOnClick}
        />
      ),
      mediaStyle: { height: '90vh' },
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
});
