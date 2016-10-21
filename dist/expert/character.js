"use strict";
var Character;
(function (Character) {
    function skillCost(currentValue, wantedValue, cost, type) {
        if (type === void 0) { type = "A"; }
        if (wantedValue <= currentValue) {
            throw RangeError("Du kan inte köpa ner dig");
        }
        var values = [];
        if (type.toLowerCase() == "a") {
            for (var i_1 = currentValue + 1; i_1 <= wantedValue; i_1++) {
                var multiple = getMultipleForASkillsAndSpells(i_1);
                values.push(multiple * cost);
            }
        }
        else if (type.toLowerCase() == "b") {
            if (wantedValue > 5 || currentValue > 5) {
                throw RangeError("Du kan aldrig ha högre än 5 i en typ B-färdighet");
            }
            for (var i_2 = currentValue + 1; i_2 <= wantedValue; i_2++) {
                var multiple = getMultipleForBSkills(i_2);
                values.push(multiple * cost);
            }
        }
        else {
            throw TypeError("Det finns bara A- och B-färdigheter i min värld. Besvärjelser räknas som A-färdighet");
        }
        var sum = 0;
        for (var i = values.length; i--;) {
            sum += values[i];
        }
        return sum;
    }
    Character.skillCost = skillCost;
    function getMultipleForASkillsAndSpells(value) {
        var multiple = 1;
        if (value > 20) {
            var interationStart = 21;
            multiple = 5;
            while (interationStart <= value) {
                if (interationStart > 21 && interationStart % 3 == 0) {
                    multiple++;
                }
                interationStart++;
            }
        }
        else if (value > 17)
            multiple = 4;
        else if (value > 14)
            multiple = 3;
        else if (value > 10)
            multiple = 2;
        return multiple;
    }
    Character.getMultipleForASkillsAndSpells = getMultipleForASkillsAndSpells;
    function getMultipleForBSkills(value) {
        if (value > 4)
            return 3;
        else if (value > 2)
            return 2;
        else
            return 1;
    }
    Character.getMultipleForBSkills = getMultipleForBSkills;
})(Character = exports.Character || (exports.Character = {}));
