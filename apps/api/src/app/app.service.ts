import { Injectable } from '@nestjs/common';
import { Message } from '@nest-js-boiler-plate/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
