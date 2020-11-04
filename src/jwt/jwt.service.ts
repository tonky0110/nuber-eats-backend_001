import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
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
  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.privateKey);
  }
}
