import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ResponsiveVideo } from './ResponsiveVideo';
import ResponsiveVideoProps from './ResponsiveVideo.interface';

describe('ResponsiveVideo', () => {
  test('renders video element with sources', () => {
    const sources = [
      { src: 'video.mp4', type: 'video/mp4' },
      { src: 'video.webm', type: 'video/webm' },
    ];
    const requiredMediaType = 'video/mp4';

    const props: ResponsiveVideoProps = {
      sources,
      requiredMediaType,
    };

    render(<ResponsiveVideo {...props} />);
  });

  test('renders error message if required media type is missing', () => {
    const sources = [
      { src: 'video.webm', type: 'video/webm' },
      { src: 'video.ogg', type: 'video/ogg' },
    ];
    const requiredMediaType = 'video/mp4';

    const props: ResponsiveVideoProps = {
      sources,
      requiredMediaType,
    };

    const { getByText } = render(<ResponsiveVideo {...props} />);
    const errorMessage = getByText(
      `Error: Required media type '${requiredMediaType}' is missing.`,
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
