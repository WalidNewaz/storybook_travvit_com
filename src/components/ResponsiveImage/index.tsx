import React from 'react';
import { getAbsolutePath } from '../../utils';

const IMG_BASE: string = process.env.IMG_BASE as string;

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
          source.type === type && (
            <source
              key={index}
              srcSet={getAbsolutePath(IMG_BASE, source.srcSet)}
              type={source.type}
            />
          ),
      )
    : null;

const Webp: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag('image/webp')(sources);
};

const Png: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag('image/png')(sources);
};

const Jpeg: React.FC<{ sources: ImageSource[] }> = ({ sources }) => {
  return getSourceTag('image/jpeg')(sources);
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
    <img src={getAbsolutePath(IMG_BASE, src)} alt={alt} {...attributes} />
  </picture>
);
