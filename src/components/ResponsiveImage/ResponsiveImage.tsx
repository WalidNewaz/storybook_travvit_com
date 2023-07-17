import React from 'react';
import ResponsiveImageProps, { ImageSource } from './ResponsiveImage.interface';

const MIMETYPE_WEBP = 'image/webp';
const MIMETYPE_PNG = 'image/png';
const MIMETYPE_JPEG = 'image/jpeg';

const getSourceTag = (type: string) => (sources: ImageSource[]) =>
  sources
    ? sources.map(
        (source, index) =>
          source.type === type && (
            <source key={index} srcSet={source.srcSet} type={source.type} />
          ),
      )
    : null;

const Webp: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag(MIMETYPE_WEBP)(sources);
};

const Png: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag(MIMETYPE_PNG)(sources);
};

const Jpeg: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag(MIMETYPE_JPEG)(sources);
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  sources,
  alt,
  src,
  ...attributes
}) => (
  <picture>
    <Webp sources={sources} />
    <Png sources={sources} />
    <Jpeg sources={sources} />
    <img src={src} alt={alt} {...attributes} />
  </picture>
);
