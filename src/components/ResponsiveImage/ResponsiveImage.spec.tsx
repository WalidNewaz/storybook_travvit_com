import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { ResponsiveImage } from './ResponsiveImage';

describe('ResponsiveImage', () => {
  test('should render responsive image with correct sources and attributes', () => {
    const sources = [
      {
        srcSet: 'image.webp',
        type: 'image/webp',
      },
      {
        srcSet: 'image.png',
        type: 'image/png',
      },
      {
        srcSet: 'image.jpg',
        type: 'image/jpeg',
      },
    ];

    const { getByAltText, getByTestId } = render(
      <ResponsiveImage
        sources={sources}
        alt="Test Image"
        src="image.jpg"
        data-testid="responsive-image"
        className="custom-class"
      />,
    );

    // Check if the responsive image sources are rendered correctly
    const webpSource = getByTestId('webp-source');
    const pngSource = getByTestId('png-source');
    const jpegSource = getByTestId('jpeg-source');

    expect(webpSource).toBeInTheDocument();
    expect(webpSource).toHaveAttribute('srcSet', 'image.webp');
    expect(webpSource).toHaveAttribute('type', 'image/webp');

    expect(pngSource).toBeInTheDocument();
    expect(pngSource).toHaveAttribute('srcSet', 'image.png');
    expect(pngSource).toHaveAttribute('type', 'image/png');

    expect(jpegSource).toBeInTheDocument();
    expect(jpegSource).toHaveAttribute('srcSet', 'image.jpg');
    expect(jpegSource).toHaveAttribute('type', 'image/jpeg');

    // Check if the image element is rendered correctly
    const imageElement = getByAltText('Test Image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Test Image');
    expect(imageElement).toHaveClass('custom-class');
  });

  // Add more test cases as needed
});
