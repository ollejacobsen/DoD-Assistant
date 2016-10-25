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

  describe('#toGroupValue()', function() {
        it('should return 0 when given 1', function() {
            let val = Converter.toGroupValue(1);
            assert.equal(0, val);
        });

        it('should return 5 when given 25', function() {
            let val = Converter.toGroupValue(25);
            assert.equal(5, val);
        });

        it('should return 9 when given 51', function() {
            let val = Converter.toGroupValue(51);
            assert.equal(9, val);
        });

        it('should return 15 when given 111', function() {
            let val = Converter.toGroupValue(111);
            assert.equal(15, val);
        });

        it('should return 33 when given 300', function() {
            let val = Converter.toGroupValue(300);
            assert.equal(33, val);
        });
  });
});