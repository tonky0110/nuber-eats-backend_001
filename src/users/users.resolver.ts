import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ArgsType,
  Context,
} from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateAccountInputType,
  CreateAccountOutput,
} from './dto/create-account.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { UserProfileInput, UserProfileOutputType } from './dto/user-profile.dto';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

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
  @UseGuards(AuthGuard)
  me(@AuthUser() authUser: User) {
    console.log(authUser)
    return authUser;
  }

  @UseGuards(AuthGuard)
  @Query(returns => UserProfileOutputType)
  async userProfile(@Args() userProfileInput: UserProfileInput ): Promise<UserProfileOutputType> {
    try {
      const user = await this.userService.findById(userProfileInput.userId);
      if (!user) {
        throw new Error();
      }
      return {
        ok: true,
        user
      };
    } catch (error) {
      return {
        error: "User Not Found.",
        ok: false
      };
    }
  }
}
