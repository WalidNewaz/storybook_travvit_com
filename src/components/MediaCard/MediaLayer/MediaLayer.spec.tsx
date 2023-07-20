import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { MediaLayer } from './MediaLayer';

describe('MediaLayer', () => {
  const imageProps = {
    src: 'test-image.jpg',
    alt: 'Test Image',
    sources: [
      {
        srcSet: 'test-image.jpg',
        type: 'image/jpeg',
      },
    ],
  };

  const videoProps = {
    sources: [
      {
        src: 'test-video.mp4',
        type: 'video/mp4',
      },
    ],
    requiredMediaType: 'video/mp4',
  };

  it('renders image media correctly', () => {
    const { getByTestId } = render(
      <MediaLayer imageProps={imageProps} mediaType="image" />,
    );

    const mediaImage = getByTestId('media-image');

    expect(mediaImage).toBeInTheDocument();
    expect(mediaImage).toHaveAttribute('src', imageProps.src);
    expect(mediaImage).toHaveAttribute('alt', imageProps.alt);
  });

  it('renders video media correctly', () => {
    const { getByTestId } = render(
      <MediaLayer videoProps={videoProps} mediaType="video" />,
    );

    const mediaVideo = getByTestId('media-video');
    expect(mediaVideo).toBeInTheDocument();

    const mediaVideoSrc = getByTestId('media-video-src-0');
    expect(mediaVideoSrc).toHaveAttribute('src', videoProps.sources[0].src);
    expect(mediaVideoSrc).toHaveAttribute('type', videoProps.sources[0].type);
  });
});
