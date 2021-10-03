import { expect } from 'chai';

import { toBoolean } from './toBoolean';

describe('toBoolean()', function () {
  it('should return false when param is undefined', function () {
    expect(toBoolean(undefined)).to.equal(false);
  });

  it(`should return false when param is 'false'`, function () {
    expect(toBoolean('false')).to.equal(false);
  });

  it(`should return true when param is 'true'`, function () {
    expect(toBoolean('true')).to.equal(true);
  });
});
