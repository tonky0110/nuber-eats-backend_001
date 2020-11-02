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
      const error = await this.userService.createAccount(createAccountInput);
      if (error) {
        return {
          ok: false,
          error,
        };
      }
      return {
        ok: false,
      };
    } catch (error) {
      console.error(e);
      return {
        ok: false,
        error,
      };
    }
  }
}
