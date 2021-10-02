import { expect } from 'chai';
import * as sinon from 'sinon';
import { SinonStubbedInstance } from 'sinon';
import winston, { transports } from 'winston';

import { LOG_LEVELS } from '../enums/logLevels';
import * as winstonOptions from './functions/winstonOptions';
import { Logger } from './index';

let winstonOptionsStub;
let loggerInstance: SinonStubbedInstance<Logger>;

const logMessage = 'foo';

describe('loggerInstance()', function () {
  beforeEach(function () {
    winstonOptionsStub = sinon.stub(winstonOptions, 'winstonOptions').returns({
      level: LOG_LEVELS.INFO,
      silent: true,
      transports: [new transports.Console({ format: winston.format.simple() })],
    });

    sinon.createStubInstance(Logger);
    loggerInstance = sinon.createStubInstance(Logger);
  });

  afterEach(function () {
    winstonOptionsStub.restore();
    sinon.restore();
  });

  it('should not be undefined', function () {
    expect(loggerInstance).not.to.be.undefined;
  });

  it('should have a logLevel of info', function () {
    const logger = new Logger();
    expect(logger.logLevel).to.eql(LOG_LEVELS.INFO);
  });

  it('should call the log method', function () {
    loggerInstance.log(logMessage);
    sinon.assert.calledOnce(loggerInstance.log);
    sinon.assert.calledOnceWithExactly(loggerInstance.log, logMessage);
  });

  it('should not throw an error when calling the log method', function () {
    const logger = new Logger();
    expect(logger.log(logMessage)).to.not.throw;

    sinon.restore();
  });

  it('should call the info method', function () {
    loggerInstance.info(logMessage);
    sinon.assert.calledOnce(loggerInstance.info);
  });

  it('should not throw an error when calling the info method', function () {
    const logger = new Logger();
    expect(logger.info(logMessage)).to.not.throw;
  });

  it('should call the error method', function () {
    loggerInstance.error(logMessage);
    sinon.assert.calledOnce(loggerInstance.error);
  });

  it('should not throw an error when calling the error method', function () {
    const logger = new Logger();
    expect(logger.error(logMessage)).to.not.throw;
  });

  it('should call the debug method', function () {
    loggerInstance.debug(logMessage);
    sinon.assert.calledOnce(loggerInstance.debug);
  });

  it('should call the warn method', function () {
    loggerInstance.warn(logMessage);
    sinon.assert.calledOnce(loggerInstance.warn);
  });

  it('should not throw an error when calling the debug method', function () {
    const logger = new Logger();
    expect(logger.debug(logMessage)).to.not.throw;
  });
});
