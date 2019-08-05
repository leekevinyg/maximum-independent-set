let assert = require('assert');
let { FindMaxIS } = require('../maximum-indepenent-set');

describe('FindMaxIS', function() {
    it('should return 0 if passed an empty array', function() {
      assert.equal(FindMaxIS([]), 0);
    });
    it('should return the weight of the first element if passed an array of 1 element', function() {
      assert.equal(FindMaxIS([10]), 10);
    });
    it('should return the maximum weight of an indepdent set possible in the path', function() {
      assert.equal(FindMaxIS([1, 9, 3, 2, 8]), 17);
      assert.equal(FindMaxIS([1, 5, 6, 3]), 8);
    });
});
