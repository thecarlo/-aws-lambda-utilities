/* eslint-disable @typescript-eslint/no-empty-function */
import { getDeploymentEnv } from './functions/getDeploymentEnv';
import { getLogLevel } from './functions/getLogLevel';
import { isAWS } from './functions/isAWS';
import { isLocal } from './functions/isLocal';
import { isProduction } from './functions/isProduction';
import { isTest } from './functions/isTest';

const { env } = process;

export class DefaultVars {
  awsProfile(): string | undefined {
    return env.AWS_PROFILE;
  }

  awsRegion(): string | undefined {
    return env.AWS_REGION;
  }

  nodeEnv(): string {
    return getDeploymentEnv(env.NODE_ENV);
  }

  awsLocalStackEndpoint(): string | undefined {
    return env.AWS_LOCALSTACK_ENDPOINT;
  }

  lambdaFunctionName(): string | undefined {
    return env.AWS_LAMBDA_FUNCTION_NAME;
  }

  lambdaFunctionVersion(): string | undefined {
    return env.AWS_LAMBDA_FUNCTION_VERSION;
  }

  logLevel(): string {
    return getLogLevel(env.LOG_LEVEL);
  }

  isTest(): boolean {
    return isTest(env.NODE_ENV);
  }

  isLocal(): boolean {
    return isLocal(env.IS_LOCAL);
  }

  isAWS(): boolean {
    return isAWS(env.IS_LOCAL, env.AWS_LAMBDA_FUNCTION_NAME);
  }

  isProduction(): boolean {
    return isProduction(env.NODE_ENV, env.AWS_LAMBDA_FUNCTION_NAME);
  }
}
