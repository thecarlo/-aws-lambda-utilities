import { expect } from 'chai';

import { DEPLOYMENT_ENVS } from '../../enums/deploymentEnvs';
import { getDeploymentEnv } from './getDeploymentEnv';

describe('getDeploymentEnv', function () {
  describe('when nodeEnv is empty', function () {
    it('should return deploymentEnv=dev', function () {
      const result = getDeploymentEnv('');
      expect(result).to.eql(DEPLOYMENT_ENVS.DEV);
    });
  });

  describe('when nodeEnv is undefined', function () {
    it('should return deploymentEnv=dev', function () {
      const result = getDeploymentEnv(undefined);
      expect(result).to.eql(DEPLOYMENT_ENVS.DEV);
    });
  });

  describe('when nodeEnv is set to an invalid value', function () {
    it('should return deploymentEnv=dev', function () {
      const result = getDeploymentEnv('foo');
      expect(result).to.eql(DEPLOYMENT_ENVS.DEV);
    });
  });

  describe('when nodeEnv is set to prd', function () {
    it('should return deploymentEnv=prd', function () {
      const result = getDeploymentEnv(DEPLOYMENT_ENVS.PRD);
      expect(result).to.eql(DEPLOYMENT_ENVS.PRD);
    });
  });

  describe('when nodeEnv is set to dev', function () {
    it('should return deploymentEnv=dev', function () {
      const result = getDeploymentEnv(DEPLOYMENT_ENVS.DEV);
      expect(result).to.eql(DEPLOYMENT_ENVS.DEV);
    });
  });

  describe('when nodeEnv is set to sit', function () {
    it('should return deploymentEnv=sit', function () {
      const result = getDeploymentEnv(DEPLOYMENT_ENVS.SIT);
      expect(result).to.eql(DEPLOYMENT_ENVS.SIT);
    });
  });
});
