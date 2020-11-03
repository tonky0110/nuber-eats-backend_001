import { Inject, Injectable } from '@nestjs/common';
import { optional } from 'joi';
import { CONFIG_OPTIONS } from './jwt.constains';
import { JwtModuleOptions } from './jwt.interfaces';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {
    // console.log(options);
  }
  hello() {
    console.log('Hello');
  }
}
