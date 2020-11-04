import {
  Resolver,
  Query,
  Mutation,
  Args,
  ArgsType,
  Context,
} from '@nestjs/graphql';
import {
  CreateAccountInputType,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
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
      return this.userService.createAccount(createAccountInput);
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error,
      };
    }
  }

  @Mutation(returns => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      return this.userService.login(loginInput);
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error,
      };
    }
  }

  @Query(returns => User)
  me(@Context() context) {
    if (!context.user) {
      return;
    } else {
      return context.user;
    }
  }
}
