import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [
    {
      id: 1,
      name: 'john',
      email: 'john@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'ron',
      email: 'ron@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 3,
      name: 'ton',
      email: 'ton@gmail.com',
      gender: 'female',
      isMarried: true,
    },
  ];
  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    console.log(this.users);
    return this.users;
  }
}
