export type clickHandler =
  | ((event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void)
  | (() => Promise<void>)
  | (() => void)
  | undefined;

/**
 * Type of method that receives a data as an argument,
 * returns a void or a promise.
 */
type genericDataHandler =
  | ((data: any) => void)
  | ((data: any) => Promise<void>)
  | (() => void)
  | (() => Promise<void>)
  | undefined;

export type likeHandler = genericDataHandler;

export type addHandler = genericDataHandler;

export type shareHandler = genericDataHandler;

export type changeHandler =
  | React.ChangeEventHandler<HTMLInputElement>
  | undefined;
