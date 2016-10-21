(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var Expert = require("./expert/main");
exports.Expert = Expert;
},{"./expert/main":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";
var Converter;
(function (Converter) {
    function basicT100ValueToT20(t100) {
        return Math.round(t100 / 5);
    }
    Converter.basicT100ValueToT20 = basicT100ValueToT20;
    function toGroupValue(value) {
        var g = new Array(20);
    }
    Converter.toGroupValue = toGroupValue;
})(Converter = exports.Converter || (exports.Converter = {}));
},{}],4:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./character"));
__export(require("./converter"));
},{"./character":2,"./converter":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZG9kLnRzIiwic3JjL2V4cGVydC9jaGFyYWN0ZXIudHMiLCJzcmMvZXhwZXJ0L2NvbnZlcnRlci50cyIsInNyYy9leHBlcnQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNDQSxJQUFZLE1BQU0sV0FBTSxlQUFlLENBQUMsQ0FBQTtBQUcvQixjQUFNO0FBQUc7O0FDSmxCLElBQWlCLFNBQVMsQ0FpRXpCO0FBakVELFdBQWlCLFNBQVMsRUFBQyxDQUFDO0lBQ3hCLG1CQUEwQixZQUFvQixFQUFFLFdBQW1CLEVBQUUsSUFBWSxFQUFFLElBQVU7UUFBVixvQkFBVSxHQUFWLFVBQVU7UUFDekYsRUFBRSxDQUFBLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQsSUFBSSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUUvQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUMsR0FBRyxZQUFZLEdBQUMsQ0FBQyxFQUFFLEdBQUMsSUFBSSxXQUFXLEVBQUUsR0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxRQUFRLEdBQUcsOEJBQThCLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQy9CLEVBQUUsQ0FBQSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksWUFBWSxHQUFHLENBQUMs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O0FDVEQsaUJBQWUsYUFBYSxDQUFDLEVBQUE7QUFDN0IsaUJBQWMsYUFBYSxDQUFDLEVBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gSW1wb3J0XHJcbmltcG9ydCAqIGFzIEV4cGVydCBmcm9tIFwiLi9leHBlcnQvbWFpblwiO1xyXG5cclxuLy8gRXhwb3J0XHJcbmV4cG9ydCB7IEV4cGVydCB9OyIsImV4cG9ydCBuYW1lc3BhY2UgQ2hhcmFjdGVyIHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBza2lsbENvc3QoY3VycmVudFZhbHVlOiBudW1iZXIsIHdhbnRlZFZhbHVlOiBudW1iZXIsIGNvc3Q6IG51bWJlciwgdHlwZSA9IFwiQVwiKTogbnVtYmVye1xyXG4gICAgICAgIGlmKHdhbnRlZFZhbHVlIDw9IGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBSYW5nZUVycm9yKFwiRHUga2FuIGludGUga8O2cGEgbmVyIGRpZ1wiKTsgXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG5cclxuICAgICAgICBpZih0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJhXCIpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gY3VycmVudFZhbHVlKzE7IGkgPD0gd2FudGVkVmFsdWU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG11bHRpcGxlID0gZ2V0TXVsdGlwbGVGb3JBU2tpbGxzQW5kU3BlbGxzKGkpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gobXVsdGlwbGUgKiBjb3N0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImJcIil7XHJcbiAgICAgICAgICAgIGlmKHdhbnRlZFZhbHVlID4gNSB8fCBjdXJyZW50VmFsdWUgPiA1KSB7ICB0aHJvdyBSYW5nZUVycm9yKFwiRHUga2FuIGFsZHJpZyBoYSBow7ZncmUgw6RuIDUgaSBlbiB0eXAgQi1mw6RyZGlnaGV0XCIpOyB9XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjdXJyZW50VmFsdWUrMTsgaSA8PSB3YW50ZWRWYWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVsdGlwbGUgPSBnZXRNdWx0aXBsZUZvckJTa2lsbHMoaSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChtdWx0aXBsZSAqIGNvc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihcIkRldCBmaW5ucyBiYXJhIEEtIG9jaCBCLWbDpHJkaWdoZXRlciBpIG1pbiB2w6RybGQuIEJlc3bDpHJqZWxzZXIgcsOka25hcyBzb20gQS1mw6RyZGlnaGV0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaT12YWx1ZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIHN1bSs9dmFsdWVzW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlwbGVGb3JBU2tpbGxzQW5kU3BlbGxzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBtdWx0aXBsZSA9IDE7XHJcbiAgICAgICAgaWYodmFsdWUgPiAyMCkge1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJhdGlvblN0YXJ0ID0gMjE7XHJcbiAgICAgICAgICAgIG11bHRpcGxlID0gNTtcclxuICAgICAgICAgICAgd2hpbGUoaW50ZXJhdGlvblN0YXJ0IDw9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbnRlcmF0aW9uU3RhcnQgPiAyMSAmJiBpbnRlcmF0aW9uU3RhcnQgJSAzID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhdGlvblN0YXJ0Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYodmFsdWUgPiAxNylcclxuICAgICAgICAgICAgbXVsdGlwbGUgPSA0O1xyXG4gICAgICAgIGVsc2UgaWYodmFsdWUgPiAxNClcclxuICAgICAgICAgICAgbXVsdGlwbGUgPSAzO1xyXG4gICAgICAgIGVsc2UgaWYodmFsdWUgPiAxMClcclxuICAgICAgICAgICAgbXVsdGlwbGUgPSAyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtdWx0aXBsZTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlwbGVGb3JCU2tpbGxzKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmKHZhbHVlID4gNClcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgZWxzZSBpZih2YWx1ZSA+IDIpXHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgbmFtZXNwYWNlIENvbnZlcnRlciB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gYmFzaWNUMTAwVmFsdWVUb1QyMCh0MTAwOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0MTAwLzUpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiB0b0dyb3VwVmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBnID0gbmV3IEFycmF5KDIwKTtcclxuICAgICAgICAvLyBnID0gZy5maWxsKDAsIDAsIDQpO1xyXG4gICAgfVxyXG59IiwiLy8gRXhwb3J0IGFsbCBtb2R1bGVzXHJcbmV4cG9ydCAqIGZyb20gIFwiLi9jaGFyYWN0ZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29udmVydGVyXCI7Il19
