import { expect } from 'chai';

import { isAWS } from './isAWS';

describe('isAWS()', function () {
  beforeEach(function () {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'foo function';
  });

  afterEach(function () {
    delete process.env.AWS_LAMBDA_FUNCTION_NAME;
  });

  it('should return true when the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and it is not a test function', function () {
    expect(isAWS(process.env.AWS_LAMBDA_FUNCTION_NAME)).to.equal(true);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and it is a test function', function () {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'test_function';
    expect(isAWS(process.env.AWS_LAMBDA_FUNCTION_NAME)).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is undefined', function () {
    delete process.env.AWS_LAMBDA_FUNCTION_NAME;
    expect(isAWS(process.env.AWS_LAMBDA_FUNCTION_NAME)).to.equal(false);
  });

  it('should return false when the AWS_LAMBDA_FUNCTION_NAME is empty', function () {
    process.env.AWS_LAMBDA_FUNCTION_NAME = '';
    expect(isAWS(process.env.AWS_LAMBDA_FUNCTION_NAME)).to.equal(false);
  });
});
