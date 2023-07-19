export type UserType = 'admin' | 'user';

export type User<T extends UserType> = {
  id?: number;
  username?: string;
  name?: string;
  email?: string;
  role: T;
  firstName: string;
  lastName: string;
  avatar: string;
};
