// eslint-disable-next-line prefer-const
import { expect } from 'chai';
import * as sinon from 'sinon';

import { DEPLOYMENT_ENVS } from '../enums/deploymentEnvs';
import { LOG_LEVELS } from '../enums/logLevels';
import { mockDefaultVars } from '../mocks/mockDefaultVars';
import { DefaultVars } from './index';

let defaultVars;

describe('DefaultVars()', function () {
  beforeEach(function () {
    defaultVars = new DefaultVars();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('should not be undefined', function () {
    expect(defaultVars).not.to.be.undefined;
  });

  describe('awsProfile()', function () {
    beforeEach(function () {
      process.env.AWS_PROFILE = mockDefaultVars.awsProfile;
    });

    afterEach(function () {
      delete process.env.AWS_PROFILE;
    });

    it('should return string value if set', function () {
      expect(defaultVars.awsProfile()).to.eql(mockDefaultVars.awsProfile);
    });

    it('should return undefined if not set', function () {
      delete process.env.AWS_PROFILE;
      expect(defaultVars.awsProfile()).to.eql(undefined);
    });
  });

  describe('awsRegion()', function () {
    beforeEach(function () {
      process.env.AWS_REGION = mockDefaultVars.awsRegion;
    });

    afterEach(function () {
      delete process.env.AWS_REGION;
    });

    it('should return string value if set', function () {
      expect(defaultVars.awsRegion()).to.eql(mockDefaultVars.awsRegion);
    });

    it('should return undefined if not set', function () {
      delete process.env.AWS_REGION;
      expect(defaultVars.awsProfile()).to.eql(undefined);
    });
  });

  describe('nodeEnv()', function () {
    beforeEach(function () {
      process.env.NODE_ENV = mockDefaultVars.nodeEnv;
    });

    afterEach(function () {
      delete process.env.NODE_ENV;
    });

    it('should return dev if not set', function () {
      delete process.env.NODE_ENV;
      expect(defaultVars.nodeEnv()).to.eql(DEPLOYMENT_ENVS.DEV);
      expect(defaultVars.nodeEnv()).to.not.eql('');
    });

    it('should return dev if set to invalid value', function () {
      delete process.env.NODE_ENV;
      process.env.NODE_ENV = 'prod';

      expect(defaultVars.nodeEnv()).to.eql(DEPLOYMENT_ENVS.DEV);
    });

    it('should return prd if set to prd', function () {
      delete process.env.NODE_ENV;
      process.env.NODE_ENV = DEPLOYMENT_ENVS.PRD;

      expect(defaultVars.nodeEnv()).to.eql(DEPLOYMENT_ENVS.PRD);
    });
  });

  describe('awsLocalStackEndpoint()', function () {
    beforeEach(function () {
      process.env.AWS_LOCALSTACK_ENDPOINT =
        mockDefaultVars.awsLocalStackEndpoint;
    });

    afterEach(function () {
      delete process.env.AWS_LOCALSTACK_ENDPOINT;
    });

    it('should return string value if set', function () {
      expect(defaultVars.awsLocalStackEndpoint()).to.eql(
        mockDefaultVars.awsLocalStackEndpoint,
      );
    });

    it('should return undefined if not set', function () {
      delete process.env.AWS_LOCALSTACK_ENDPOINT;
      expect(defaultVars.awsLocalStackEndpoint()).to.eql(undefined);
    });
  });

  describe('lambdaFunctionName()', function () {
    beforeEach(function () {
      process.env.AWS_LAMBDA_FUNCTION_NAME = mockDefaultVars.lambdaFunctionName;
    });

    afterEach(function () {
      delete process.env.AWS_LAMBDA_FUNCTION_NAME;
    });

    it('should return string value if set', function () {
      expect(defaultVars.lambdaFunctionName()).to.eql(
        mockDefaultVars.lambdaFunctionName,
      );
    });

    it('should return undefined if not set', function () {
      delete process.env.AWS_LAMBDA_FUNCTION_NAME;
      expect(defaultVars.lambdaFunctionName()).to.eql(undefined);
    });
  });

  describe('lambdaFunctionVersion()', function () {
    beforeEach(function () {
      process.env.AWS_LAMBDA_FUNCTION_VERSION =
        mockDefaultVars.lambdaFunctionVersion;
    });

    afterEach(function () {
      delete process.env.AWS_LAMBDA_FUNCTION_VERSION;
    });

    it('should return string value if set', function () {
      expect(defaultVars.lambdaFunctionVersion()).to.eql(
        mockDefaultVars.lambdaFunctionVersion,
      );
    });

    it('should return undefined if not set', function () {
      delete process.env.AWS_LAMBDA_FUNCTION_VERSION;
      expect(defaultVars.lambdaFunctionVersion()).to.eql(undefined);
    });
  });

  describe('logLevel()', function () {
    beforeEach(function () {
      process.env.LOG_LEVEL = mockDefaultVars.logLevel;
    });

    afterEach(function () {
      delete process.env.LOG_LEVEL;
    });

    it('should return string value if set', function () {
      expect(defaultVars.logLevel()).to.eql(mockDefaultVars.logLevel);
    });

    it('should return info if not set', function () {
      delete process.env.LOG_LEVEL;
      expect(defaultVars.logLevel()).to.eql(LOG_LEVELS.INFO);
    });
  });

  describe('isTest()', function () {
    afterEach(function () {
      sinon.reset();
    });

    it('should return false', function () {
      sinon.stub(DefaultVars.prototype, 'isTest').callsFake(() => {
        return false;
      });

      expect(defaultVars.isTest()).to.eql(false);

      sinon.reset();
    });

    it('should return true', function () {
      sinon.stub(DefaultVars.prototype, 'isTest').callsFake(() => {
        return true;
      });

      expect(defaultVars.isTest()).to.eql(true);

      sinon.reset();
    });
  });

  describe('isAWS()', function () {
    afterEach(function () {
      sinon.reset();
    });

    it('should return false', function () {
      sinon.stub(DefaultVars.prototype, 'isAWS').callsFake(() => {
        return false;
      });

      expect(defaultVars.isAWS()).to.eql(false);

      sinon.reset();
    });

    it('should return true', function () {
      sinon.stub(DefaultVars.prototype, 'isAWS').callsFake(() => {
        return true;
      });

      expect(defaultVars.isAWS()).to.eql(true);

      sinon.reset();
    });
  });

  describe('isProduction()', function () {
    afterEach(function () {
      sinon.reset();
    });

    it('should return false', function () {
      sinon.stub(DefaultVars.prototype, 'isProduction').callsFake(() => {
        return false;
      });

      expect(defaultVars.isProduction()).to.eql(false);

      sinon.reset();
    });

    it('should return true', function () {
      sinon.stub(DefaultVars.prototype, 'isProduction').callsFake(() => {
        return true;
      });

      expect(defaultVars.isProduction()).to.eql(true);

      sinon.reset();
    });
  });
});
