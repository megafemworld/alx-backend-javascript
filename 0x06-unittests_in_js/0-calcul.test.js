const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5', function() {
    assert.strictEqual(calculateNumber(1.9, 3), 5);
  });
  it('should return 5', function() {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
  });
  it('should return 6', function() {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
  });
  it('should return 0', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.4999999, 3.4999999), 4);
    });
});