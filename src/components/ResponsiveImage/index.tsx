import React from 'react';

export type ImageTypes =
  | 'image/avif'
  | 'image/jpeg'
  | 'image/png'
  | 'image/webp';

export interface ImageSource extends Record<string, any> {
  type: ImageTypes;
  srcset: string;
  sizes?: string;
  media?: string;
  height?: string;
  width?: string;
}

interface ResponsiveImageProps extends Record<string, any> {
  sources: ImageSource[] | undefined;
  alt: string;
  height?: number;
  width?: number;
  loading?: 'eager' | 'lazy';
  sizes?: string;
  src: string;
  srcset?: string;
  className?: string;
}

const getSourceTag = (type: string) => (sources) =>
  sources
    ? sources.map(
        (source, index) =>
          source.type === type && <source key={index} {...source} />,
      )
    : null;

const Avif: React.FC<{ sources: ImageSource[] | undefined }> = ({
  sources,
}) => {
  return getSourceTag('image/avif')(sources);
};

const Webp: React.FC<{ sources: ImageSource[] | undefined }> = ({
  sources,
}) => {
  return getSourceTag('image/webp')(sources);
};

const Png: React.FC<{ sources: ImageSource[] | undefined }> = ({ sources }) => {
  return getSourceTag('image/png')(sources);
};

const Jpeg: React.FC<{ sources: ImageSource[] | undefined }> = ({
  sources,
}) => {
  return getSourceTag('image/jpeg')(sources);
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  sources,
  alt,
  src,
  className,
}) => {
  const supportsWebp =
    typeof window !== 'undefined' &&
    window?.document
      ?.createElement('canvas')
      .toDataURL('image/webp')
      .startsWith('data:image/webp');
  const supportsAvif =
    typeof window !== 'undefined' &&
    window?.document
      ?.createElement('canvas')
      .toDataURL('image/avif')
      .startsWith('data:image/avif');

  return (
    <picture>
      {supportsAvif && <Avif sources={sources} />}
      {supportsWebp && <Webp sources={sources} />}
      <Png sources={sources} />
      <Jpeg sources={sources} />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};
