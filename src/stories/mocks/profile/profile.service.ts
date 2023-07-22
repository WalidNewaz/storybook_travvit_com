import type { User, UserType } from '../../../types';

export default class ProfileService {
  // async getUser(): Promise<User<UserType>> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log('ProfileService.getUser');
  //       resolve(user);
  //     }, 3000);
  //   });
  // }

  async login(username: string, password: string): Promise<User<UserType>> {
    const user: User<UserType> = {
      id: 1,
      username: 'JaneDoe',
      email: 'jane@example.com',
      role: 'user',
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: 'avatar-jane-1.jpeg',
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('ProfileService.login');
        resolve(user);
      }, 3000);
    });
  }

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('ProfileService.logout');
        resolve();
      }, 3000);
    });
  }
}
