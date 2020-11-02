import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateAccountInputType,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(returns => Boolean)
  hi() {
    return true;
  }

  @Mutation(returns => CreateAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInputType,
  ): Promise<CreateAccountOutput> {
    try {
      const { ok, error } = await this.userService.createAccount(
        createAccountInput,
      );
      return {
        ok,
        error,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error,
      };
    }
  }
}
