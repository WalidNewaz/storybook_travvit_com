import React from 'react';

export interface ImageSource extends Record<string, any> {
  type: string;
  srcSet: string;
  sizes?: string;
  media?: string;
  height?: string;
  width?: string;
}

export interface ResponsiveImageProps extends Record<string, any> {
  sources: ImageSource[];
  alt: string;
  src: string;
}

const getSourceTag = (type: string) => (sources: ImageSource[]) =>
  sources
    ? sources.map(
        (source, index) =>
          source.type === type && <source key={index} {...source} />,
      )
    : null;

// const Avif: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
//   return getSourceTag('image/avif')(sources);
// };

const Webp: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag('image/webp')(sources);
};

const Png: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag('image/png')(sources);
};

const Jpeg: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag('image/jpeg')(sources);
};

const supportsWebp = () => {
  if (window && window.document) {
    return window.document
      .createElement('canvas')
      .toDataURL('image/webp')
      .startsWith('data:image/webp');
  }
  return false;
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  sources,
  alt,
  src,
  ...attributes
}) => {
  // const supportsWebp =
  //   typeof window !== 'undefined' &&
  //   window?.document
  //     ?.createElement('canvas')
  //     .toDataURL('image/webp')
  //     .startsWith('data:image/webp');
  // const supportsAvif =
  //   typeof window !== 'undefined' &&
  //   window?.document
  //     ?.createElement('canvas')
  //     .toDataURL('image/avif')
  //     .startsWith('data:image/avif');

  return (
    <picture>
      {/* {supportsAvif && <Avif sources={sources} />} */}
      <Webp sources={sources} />
      <Png sources={sources} />
      <Jpeg sources={sources} />
      <img src={src} alt={alt} {...attributes} />
    </picture>
  );
};
