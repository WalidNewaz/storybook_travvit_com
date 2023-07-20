import ResponsiveImageProps from '../components/ResponsiveImage/ResponsiveImage.interface';

export const getAbsolutePath = (base: string, path: string) => {
  if (
    path.startsWith('http') ||
    path.startsWith('data') ||
    path.startsWith('blob') ||
    path.startsWith('/static')
  ) {
    return path;
  }
  return base.concat(path);
};

export const getImgagePropsWithAbsPaths = (
  base: string,
  imageProps: ResponsiveImageProps,
) => ({
  ...imageProps,
  src: getAbsolutePath(base, imageProps.src),
  sources: imageProps.sources.map((imgSource) => ({
    ...imgSource,
    srcSet: getAbsolutePath(base, imgSource.srcSet),
  })),
});
