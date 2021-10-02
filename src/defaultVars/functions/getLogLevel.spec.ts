import { expect } from 'chai';

import { LOG_LEVELS } from '../../enums/logLevels';
import { getLogLevel } from './getLogLevel';

describe('getLogLevel', function () {
  describe('when logLevel is empty', function () {
    it('should return logLevel=info', function () {
      const result = getLogLevel('');
      expect(result).to.eql(LOG_LEVELS.INFO);
    });
  });

  describe('when logLevel is undefined', function () {
    it('should return logLevel=info', function () {
      const result = getLogLevel(undefined);
      expect(result).to.eql(LOG_LEVELS.INFO);
    });
  });

  describe('when logLevel is set to an invalid value', function () {
    it('should return logLevel=info', function () {
      const result = getLogLevel('foo');
      expect(result).to.eql(LOG_LEVELS.INFO);
    });
  });

  describe('when logLevel is set to debug', function () {
    it('should return logLevel=debug', function () {
      const result = getLogLevel(LOG_LEVELS.DEBUG);
      expect(result).to.eql(LOG_LEVELS.DEBUG);
    });
  });

  describe('when logLevel is set to error', function () {
    it('should return logLevel=error', function () {
      const result = getLogLevel(LOG_LEVELS.ERROR);
      expect(result).to.eql(LOG_LEVELS.ERROR);
    });
  });

  describe('when logLevel is set to verbose', function () {
    it('should return logLevel=verbose', function () {
      const result = getLogLevel(LOG_LEVELS.VERBOSE);
      expect(result).to.eql(LOG_LEVELS.VERBOSE);
    });
  });
});
