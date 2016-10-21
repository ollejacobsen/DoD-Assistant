import test from 'ava';

var dod = require('../../dist/dod.js');
var expert = dod.Expert;

test('GetMultipleX1', t => {

    for(var i = 1; i <= 10; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(1, multiple);
    }
});

test('GetMultipleX2', t => {
    for(var i = 11; i <= 14; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(2, multiple);
    }
});

test('GetMultipleX3', t => {
    for(var i = 15; i <= 17; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(3, multiple);
    }
});

test('GetMultipleX4', t => {
    for(var i = 18; i <= 20; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(4, multiple);
    }
});

test('GetMultipleX5', t => {
    for(var i = 21; i <= 23; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(5, multiple);
    }
});

test('GetMultipleX6', t => {
    for(var i = 24; i <= 26; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(6, multiple);
    }
});

test('GetMultipleX7', t => {
    for(var i = 27; i <= 29; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(7, multiple);
    }
});

test('GetMultipleX8', t => {
    for(var i = 30; i <= 32; i++){
        var multiple = expert.getMultipleForASkillsAndSpells(i);
        t.deepEqual(8, multiple);
    }
});

test('A skill: Invest from 0 -> 10 with cost of 5', t => {
    var cost = expert.calculateSkillCost(0, 10, 5, "A");

    t.deepEqual(50, cost);
});

test('A skill: Invest from 0 -> 15 with cost of 3', t => {
    var cost = expert.calculateSkillCost(0, 15, 3, "A");

    t.deepEqual(63, cost);
});

test('B skill: Invest from 0 -> 1 with cost of 2 = 2', t => {
    var cost = expert.calculateSkillCost(0, 1, 2, "B");

    t.deepEqual(2, cost);
});
test('B skill: Invest from 0 -> 3 with cost of 2 = 8', t => {
    var cost = expert.calculateSkillCost(0, 3, 2, "B");

    t.deepEqual(8, cost);
});

test('B skill: Invest from 0 -> 4 with cost of 8 = 48', t => {
    var cost = expert.calculateSkillCost(0, 4, 8, "B");

    t.deepEqual(48, cost);
});

test('B skill: Invest from 3 -> 5 with cost of 14 = 70', t => {
    var cost = expert.calculateSkillCost(3, 5, 14, "B");

    t.deepEqual(70, cost);
});