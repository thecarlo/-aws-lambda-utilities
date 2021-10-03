import { expect } from 'chai';

import { isLocal } from './isLocal';

describe('isLocal()', function () {
  it('should return false when isLocal is undefined', function () {
    expect(isLocal(undefined)).to.equal(false);
  });

  it('should return true when isLocal is true', function () {
    expect(isLocal('true')).to.equal(true);
  });

  it('should return true when isLocal is false', function () {
    expect(isLocal('false')).to.equal(false);
  });

  it('should return false when isLocal is anything else', function () {
    expect(isLocal('foo')).to.equal(false);
  });
});
