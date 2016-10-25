var assert = require('assert');

var dod = require('../dist/dod.js');
var Character = dod.Expert.Character;

describe('Expert.Character', function() {
  describe('#getMultipleForASkillsAndSpells(A)', function() {
    it('should return 1 on range 1 - 10', function() {
        for(var i = 1; i <= 10; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(1, multiple);
        }
    });

    it('should return 2 on range 11 - 14', function() {
        for(var i = 11; i <= 14; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(2, multiple);
        }
    });

    it('should return 3 on range 15 - 17', function() {
        for(var i = 15; i <= 17; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(3, multiple);
        }
    });

    it('should return 4 on range 18 - 20', function() {
        for(var i = 18; i <= 20; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(4, multiple);
        }
    });

    it('should return 5 on range 21 - 23', function() {
        for(var i = 21; i <= 23; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(5, multiple);
        }
    });

    it('should return 6 on range 24 - 26', function() {
        for(var i = 24; i <= 26; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(6, multiple);
        }
    });

    it('should return 7 on range 27 - 29', function() {
        for(var i = 27; i <= 29; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(7, multiple);
        }
    });

    it('should return 8 on range 30 - 32', function() {
        for(var i = 30; i <= 32; i++){
            let multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(8, multiple);
        }
    });

  });

  describe('#skillCost(type = A)', function() {
      it('should return 50 when invest from 0 to 10 with a cost of 5', function() {
          let cost = Character.skillCost(0, 10, 5, "A");
          assert.equal(50, cost);
      });

      it('should return 63 when invest from 0 to 15 with a cost of 3', function() {
          let cost = Character.skillCost(0, 15, 3, "A");
          assert.equal(63, cost);
      });
  });

   describe('#skillCost(type = B)', function() {
      it('should return 2 when invest from 0 to 1 with a cost of 2', function() {
          let cost = Character.skillCost(0, 1, 2, "B");
          assert.equal(2, cost);
      });

      it('should return 8 when invest from 0 to 3 with a cost of 2', function() {
          let cost = Character.skillCost(0, 3, 2, "B");
          assert.equal(8, cost);
      });

      it('should return 48 when invest from 0 to 4 with a cost of 8', function() {
          let cost = Character.skillCost(0, 4, 8, "B");
          assert.equal(48, cost);
      });

      it('should return 70 when invest from 3 to 5 with a cost of 14', function() {
          let cost = Character.skillCost(3, 5, 14, "B");
          assert.equal(70, cost);
      });
  });
});