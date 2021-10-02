import { expect } from 'chai';

import { isProduction } from './isProduction';

describe('isProduction()', function () {
  it('should return false when environment is undefined', function () {
    expect(isProduction(undefined, 'foo function')).to.equal(false);
  });

  it('should return false when environment and function name is undefined', function () {
    expect(isProduction(undefined, undefined)).to.equal(false);
  });

  it('should return false when environment is an empty string', function () {
    expect(isProduction('', 'foo function')).to.equal(false);
  });

  it('should return true when the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and NODE_ENV is set to prd', function () {
    expect(isProduction('prd', 'foo')).to.equal(true);
  });

  it('should return true when the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and NODE_ENV is set to PRD', function () {
    expect(isProduction('PRD', 'foo')).to.equal(true);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and NODE_ENV is undefined', function () {
    expect(isProduction(undefined, 'foo')).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is undefined and NODE_ENV is set to prd', function () {
    expect(isProduction('prd', undefined)).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is a test function and NODE_ENV is set to prd', function () {
    expect(isProduction('prd', 'test_function')).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is empty and NODE_ENV is set to prd', function () {
    expect(isProduction('prd', '')).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is empty and NODE_ENV is set to dev', function () {
    expect(isProduction('dev', '')).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is not empty and NODE_ENV is set to dev', function () {
    expect(isProduction('dev', 'foo function')).to.equal(false);
  });
});
