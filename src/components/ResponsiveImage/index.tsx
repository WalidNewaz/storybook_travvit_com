import React from 'react';

interface ResponsiveImageProps {
  srcJpeg: string;
  srcWebp?: string;
  srcPng?: string;
  srcSvg?: string;
  srcAvif?: string;
  alt: string;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  srcJpeg,
  srcWebp,
  srcPng,
  srcSvg,
  srcAvif,
  alt,
  className = '',
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
      {supportsAvif && srcAvif && (
        <source srcSet={srcAvif} type="image/avif" className={className} />
      )}
      {supportsWebp && srcWebp && (
        <source srcSet={srcWebp} type="image/webp" className={className} />
      )}
      {srcPng && (
        <source srcSet={srcPng} type="image/png" className={className} />
      )}
      {srcSvg && (
        <source srcSet={srcSvg} type="image/svg+xml" className={className} />
      )}
      <img src={srcJpeg} alt={alt} className={className} />
    </picture>
  );
};
