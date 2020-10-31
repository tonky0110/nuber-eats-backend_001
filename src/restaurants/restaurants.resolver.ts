import { Query } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query(returns => Boolean)
  isPizzaGood(): Boolean {
    return true;
  }
}
