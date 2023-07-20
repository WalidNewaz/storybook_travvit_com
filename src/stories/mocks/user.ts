import face1 from '../images/avatar-jane-1.jpeg';
import type { User, UserType } from '../../types';

export const user: User<UserType> = {
  id: 1,
  username: 'JaneDoe',
  email: 'jane@example.com',
  role: 'user',
  firstName: 'Jane',
  lastName: 'Doe',
  avatar: face1 as string,
};
