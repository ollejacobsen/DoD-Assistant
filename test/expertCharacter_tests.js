var assert = require('assert');

var dod = require('../dist/dod.js');
var Character = dod.Expert.Character;

describe('Expert.Character', function() {
  describe('#getMultipleForASkillsAndSpells()', function() {
    it('should return 1 on range 1 - 10', function() {
        for(var i = 1; i <= 10; i++){
            var multiple = Character.getMultipleForASkillsAndSpells(i);
            assert.equal(1, multiple);
        }
    });
  });
});

// test('Get multiple x1', t => {
//     for(var i = 1; i <= 10; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(1, multiple);
//     }
// });

// test('Get multiple x2', t => {
//     for(var i = 11; i <= 14; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(2, multiple);
//     }
// });

// test('Get multiple x3', t => {
//     for(var i = 15; i <= 17; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(3, multiple);
//     }
// });

// test('Get multiple x4', t => {
//     for(var i = 18; i <= 20; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(4, multiple);
//     }
// });

// test('Get multiple x5', t => {
//     for(var i = 21; i <= 23; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(5, multiple);
//     }
// });

// test('Get multiple x6', t => {
//     for(var i = 24; i <= 26; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(6, multiple);
//     }
// });

// test('Get multiple x7', t => {
//     for(var i = 27; i <= 29; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(7, multiple);
//     }
// });

// test('Get multiple x8', t => {
//     for(var i = 30; i <= 32; i++){
//         var multiple = Calculate.getMultipleForASkillsAndSpells(i);
//         t.deepEqual(8, multiple);
//     }
// });

// test('A skill: Invest from 0 -> 10 with cost of 5', t => {
//     var cost = Calculate.skillCost(0, 10, 5, "A");

//     t.deepEqual(50, cost);
// });

// test('A skill: Invest from 0 -> 15 with cost of 3', t => {
//     var cost = Calculate.skillCost(0, 15, 3, "A");

//     t.deepEqual(63, cost);
// });

// test('B skill: Invest from 0 -> 1 with cost of 2 = 2', t => {
//     var cost = Calculate.skillCost(0, 1, 2, "B");

//     t.deepEqual(2, cost);
// });
// test('B skill: Invest from 0 -> 3 with cost of 2 = 8', t => {
//     var cost = Calculate.skillCost(0, 3, 2, "B");

//     t.deepEqual(8, cost);
// });

// test('B skill: Invest from 0 -> 4 with cost of 8 = 48', t => {
//     var cost = Calculate.skillCost(0, 4, 8, "B");

//     t.deepEqual(48, cost);
// });

// test('B skill: Invest from 3 -> 5 with cost of 14 = 70', t => {
//     var cost = Calculate.skillCost(3, 5, 14, "B");

//     t.deepEqual(70, cost);
// });