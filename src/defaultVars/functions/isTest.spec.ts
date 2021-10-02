import { expect } from 'chai';

import { isTest } from './isTest';

describe('isTest()', function () {
  it('should return false when the environment is not undefined or empty and it is not equal to test', function () {
    expect(isTest('foo')).to.equal(false);
  });

  it('should return false when the environment is undefined', function () {
    expect(isTest('foo')).to.equal(false);
  });

  it('should return false when the environment is empty', function () {
    expect(isTest('')).to.equal(false);
  });

  it('should return true when the environment is not undefined or empty and it is equal to test', function () {
    expect(isTest('test')).to.equal(true);
  });
});
