import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint to create a new user
  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.userService.createUser(name, email, password);
  }

  // Endpoint to get all users
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  async getUserById(@Body('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
}
