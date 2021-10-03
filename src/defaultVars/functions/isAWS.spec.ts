import { expect } from 'chai';

import { isAWS } from './isAWS';

describe('isAWS()', function () {
  beforeEach(function () {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'foo function';
  });

  afterEach(function () {
    delete process.env.AWS_LAMBDA_FUNCTION_NAME;
    delete process.env.IS_LOCAL;
  });

  it(`should return true when IS_LOCAL is 'false' and the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and it is not a test function`, function () {
    process.env.IS_LOCAL = 'false';

    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(true);
  });

  it(`should return false when IS_LOCAL is 'true' and the AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and it is not a test function`, function () {
    process.env.IS_LOCAL = 'true';

    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(false);
  });

  it(`should return false when IS_LOCAL is 'true' and  AWS_LAMBDA_FUNCTION_NAME is not undefined or empty and it is a test function`, function () {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'test_function';
    process.env.IS_LOCAL = 'true';

    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(false);
  });

  it('should return false when AWS_LAMBDA_FUNCTION_NAME is undefined', function () {
    delete process.env.AWS_LAMBDA_FUNCTION_NAME;
    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(false);
  });

  it('should return true when IS_LOCAL is undefined', function () {
    delete process.env.IS_LOCAL;
    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(true);
  });

  it('should return false when AWS_LAMBDA_FUNCTION_NAME is empty', function () {
    process.env.AWS_LAMBDA_FUNCTION_NAME = '';
    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(false);
  });

  it('should return true when IS_LOCAL is empty', function () {
    process.env.IS_LOCAL = '';
    expect(
      isAWS(process.env.IS_LOCAL, process.env.AWS_LAMBDA_FUNCTION_NAME),
    ).to.equal(true);
  });
});
