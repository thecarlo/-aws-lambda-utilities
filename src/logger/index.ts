/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { isObject, isString } from 'lodash';
import winston, { createLogger } from 'winston';

import { DefaultVars } from '../defaultVars';
import { LOG_LEVELS } from '../enums/logLevels';
import { winstonOptions } from './functions/winstonOptions';

export class Logger {
  logLevel: string;

  private readonly logger: winston.Logger;

  constructor() {
    const { logLevel } = new DefaultVars();

    this.logLevel = logLevel();
    this.logger = createLogger(winstonOptions(this.logLevel));
  }

  private emitLog(level: string, message: string, meta?: any) {
    //if meta is not a string or an object, just log message
    if (!isString(meta) && !isObject(meta)) {
      (this.logger as any)[level](message);
      return;
    }

    //if meta is a string, append meta to message
    if (typeof meta === 'string') {
      (this.logger as any)[level](`${message} ${meta}`);
      return;
    }

    // if meta is an object and not a string, log the message and meta
    if (isObject(meta) && !isString(meta)) {
      (this.logger as any)[level](message, meta);
      return;
    }
  }

  public log(message: string, meta?: any): void {
    this.emitLog(this.logLevel, message, meta);
  }

  public debug(message: string, meta?: any): void {
    this.emitLog(LOG_LEVELS.DEBUG, message, meta);
  }

  public info(message: string, meta?: any): void {
    this.emitLog(LOG_LEVELS.INFO, message, meta);
  }

  public warn(message: string, meta?: any): void {
    this.emitLog(LOG_LEVELS.WARN, message, meta);
  }

  public error(message: string, meta?: any): void {
    this.emitLog(LOG_LEVELS.ERROR, message, meta);
  }
}
