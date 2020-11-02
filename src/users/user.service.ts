import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInputType,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.users.find();
  }

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInputType): Promise<{ ok: boolean; error?: string }> {
    try {
      // 1. check new User
      const exists = await this.users.findOne({ email });
      if (exists) {
        // make error
        return {
          ok: false,
          error: 'There is a user with that email aleady.',
        };
      }
      // 2. create user & hash the password
      await this.users.save(this.users.create({ email, password, role }));
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: "Couldn't create account.",
      };
    }
  }
}
