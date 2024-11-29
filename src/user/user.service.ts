import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //   async createUser(name: string, email: string, password: string): Promise<User> {
  //     const newUser = this.userRepository.create({ name, email, password });
  //     return this.userRepository.save(newUser);
  //   }
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    const newUser = this.userRepository.create({ name, email, password });
    return this.userRepository.save(newUser);
  }
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }
  // Example: Get all users
  //   async getAllUsers(): Promise<User[]> {
  //     return this.userRepository.find();
  //   }

  // Example: Get a user by ID (updated with 'where')
  //   async getUserById(id: number): Promise<User> {
  //     return this.userRepository.findOne({
  //       where: { id }, // Use 'where' to specify the condition
  //     });
  //   }
}
