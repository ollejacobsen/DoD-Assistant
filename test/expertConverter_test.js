var assert = require('assert');

var dod = require('../dist/dod.js');
var Converter = dod.Expert.Converter;

describe('Expert.Converter', function() {
  describe('#basicT100ValueToT20()', function() {
    it('should convert 75% to T20 value of 15', function() {
        assert.equal(15, Converter.basicT100ValueToT20(75));
    });

    it('should convert 73% to T20 value of 15', function() {
        assert.equal(15, Converter.basicT100ValueToT20(73));
    });

    it('should convert 72% to T20 value of 14', function() {
        assert.equal(14, Converter.basicT100ValueToT20(72));
    });

    it('should convert 75% to T20 value of 15', function() {
        assert.equal(15, Converter.basicT100ValueToT20(75));
    });
  });
});