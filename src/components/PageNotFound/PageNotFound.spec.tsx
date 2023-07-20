import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound', () => {
  test('should render page not found component with correct content', () => {
    const { getByText, getByTestId } = render(
      <PageNotFound
        imageProps={{
          sources: [],
          src: 'image.jpg',
          alt: 'Page Not Found Image',
          className: 'custom-image',
        }}
        className="custom-class"
      />,
    );

    // Check if the page not found content is rendered correctly
    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Page not found')).toBeInTheDocument();
    expect(
      getByText(
        "Sorry, but the area of the site you've currently ventured into does not exist or is unavailable at the moment.",
      ),
    ).toBeInTheDocument();

    // Check if the image is rendered correctly
    const imageElement = getByTestId('media-image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Page Not Found Image');
    expect(imageElement).toHaveClass('custom-image');

    // Check if the component has the custom class
    const mainElement = document.querySelector('main');
    expect(mainElement).toHaveClass('page-not-found');
  });

  // Add more test cases as needed
});
