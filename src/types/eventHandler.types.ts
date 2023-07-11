export type clickHandler =
  | ((event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void)
  | (() => Promise<void>)
  | (() => void)
  | undefined;
