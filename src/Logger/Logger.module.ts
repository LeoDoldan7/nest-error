import { DynamicModule, Module } from '@nestjs/common';

import { AppLogger } from './app.logger';

@Module({})
export class LoggerModule {
  public static register<T>(options: any): DynamicModule {
    return {
      module: LoggerModule,
      providers: [AppLogger],
      exports: [AppLogger]
    };
  }
}
