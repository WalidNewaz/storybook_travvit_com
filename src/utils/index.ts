export const getAbsolutePath = (base: string, path: string) => {
  if (path.startsWith('http')) {
    return path;
  }
  return base.concat(path);
};
