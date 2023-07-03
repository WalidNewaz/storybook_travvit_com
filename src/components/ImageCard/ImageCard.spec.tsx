import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ImageCard } from './ImageCard';

describe('ImageCard', () => {
  const src = 'test-image.jpg';
  const alt = 'Test Image Alt Text';

  test('renders the image with correct src and alt attributes', () => {
    const { getByAltText } = render(<ImageCard src={src} alt={alt} />);
    const imageElement = getByAltText(alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
  });

  test('applies custom container classes and styles', () => {
    const containerClassName = 'custom-container';
    const containerStyle = { backgroundColor: 'red' };
    const { container } = render(
      <ImageCard
        src={src}
        alt={alt}
        containerClassName={containerClassName}
        containerStyle={containerStyle}
      />,
    );
    const containerElement = container.firstChild;
    expect(containerElement).toHaveClass(containerClassName);
    expect(containerElement).toHaveStyle('background-color: red');
  });

  test('applies custom image classes and styles', () => {
    const imageClassName = 'custom-image';
    const imageStyle = { border: '1px solid blue' };
    const { getByAltText } = render(
      <ImageCard
        src={src}
        alt={alt}
        imageClassName={imageClassName}
        imageStyle={imageStyle}
      />,
    );
    const imageElement = getByAltText(alt);
    expect(imageElement).toHaveClass(imageClassName);
    expect(imageElement).toHaveStyle('border: 1px solid blue');
  });
});
