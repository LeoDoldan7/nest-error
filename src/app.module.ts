import { Module } from '@nestjs/common';
import {APP_FILTER} from '@nestjs/core';

import {LoggerModule} from './Logger/Logger.module';
import {DefaultExceptionFilter} from './DefaultException.filter';

@Module({
  imports: [LoggerModule],
  providers: [{
    provide: APP_FILTER,
    useClass: DefaultExceptionFilter
  }],
})
export class AppModule {}
