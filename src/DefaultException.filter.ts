import { Catch, ArgumentsHost, Inject } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import {AppLogger} from './Logger/app.logger';


@Catch()
export class DefaultExceptionFilter extends BaseExceptionFilter {
  //TODO logger after its module implementation
  constructor(
    @Inject(AppLogger)
    private readonly logger?: AppLogger) {
    super();
  }

  public async catch(error: any, host: ArgumentsHost) {
    console.log('working');
    
  }
}
