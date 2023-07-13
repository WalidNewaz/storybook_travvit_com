import face1 from '../images/avatar-jane-1.jpeg';
import { User } from '../../interfaces/';

export const user: User<'admin' | 'user'> = {
  id: 1,
  username: 'JaneDoe',
  email: 'jane@example.com',
  role: 'user',
  firstName: 'Jane',
  lastName: 'Doe',
  avatar: face1 as string,
};
