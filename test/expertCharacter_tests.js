var assert = require('assert');

var dod = require('../dist/dod.js');
var Character = dod.Expert.Character;

describe('Expert.Character', function() {
  describe('#getMultipleForASkillsAndSpells()', function() {
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
});

// test('A skill: Invest from 0 -> 10 with cost of 5', t => {
//     var cost = Character.skillCost(0, 10, 5, "A");

//     t.deepEqual(50, cost);
// });

// test('A skill: Invest from 0 -> 15 with cost of 3', t => {
//     var cost = Character.skillCost(0, 15, 3, "A");

//     t.deepEqual(63, cost);
// });

// test('B skill: Invest from 0 -> 1 with cost of 2 = 2', t => {
//     var cost = Character.skillCost(0, 1, 2, "B");

//     t.deepEqual(2, cost);
// });
// test('B skill: Invest from 0 -> 3 with cost of 2 = 8', t => {
//     var cost = Character.skillCost(0, 3, 2, "B");

//     t.deepEqual(8, cost);
// });

// test('B skill: Invest from 0 -> 4 with cost of 8 = 48', t => {
//     var cost = Character.skillCost(0, 4, 8, "B");

//     t.deepEqual(48, cost);
// });

// test('B skill: Invest from 3 -> 5 with cost of 14 = 70', t => {
//     var cost = Character.skillCost(3, 5, 14, "B");

//     t.deepEqual(70, cost);
// });