import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.model';
import { CreateUserDto } from './CreateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: typeof Users,
  ) {}

  async addUser(payload: CreateUserDto): Promise<Users | undefined> {
    try {
      return await this.usersRepository.create(payload);
    } catch (error) {
      console.error('Error while adding a user:', error);
      throw error;
    }
  }

  async getUserById(userId: number): Promise<Users | undefined> {
    try {
      return await this.usersRepository.findOne({ where: { userId } });
    } catch (error) {
      console.error('Error while getting a user by ID:', error);
      throw error;
    }
  }

  async isUserAdmin(userId: number): Promise<boolean> {
    try {
      const user = await this.usersRepository.findOne({ where: { userId } });
      return user?.isAdmin === 1;
    } catch (error) {
      console.error('Error while checking if a user is an admin:', error);
      throw error;
    }
  }

  async deleteUser(userId: number): Promise<void> {
    try {
      await this.usersRepository.destroy({ where: { userId } });
    } catch (error) {
      console.error('Error while deleting a user:', error);
      throw error;
    }
  }

  // async makeUserAdmin(userId: number): Promise<void> {
  //   try {
  //     await this.usersRepository.update(userId, { isAdmin: 1 });
  //   } catch (error) {
  //     console.error('Error while making a user an admin:', error);
  //     throw error;
  //   }
  // }
}
