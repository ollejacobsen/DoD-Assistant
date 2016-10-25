"use strict";
var _ = require('lodash');
var Converter;
(function (Converter) {
    function basicT100ValueToT20(t100) {
        return Math.round(t100 / 5);
    }
    Converter.basicT100ValueToT20 = basicT100ValueToT20;
    var groupValueArray = Array();
    function toGroupValue(value) {
        if (groupValueArray.length == 0) {
            groupValueArray = Array(301);
            _.fill(groupValueArray, 0, 0, 3 + 1);
            _.fill(groupValueArray, 1, 4, 8 + 1);
            _.fill(groupValueArray, 2, 9, 12 + 1);
            _.fill(groupValueArray, 3, 13, 16 + 1);
            _.fill(groupValueArray, 4, 17, 20 + 1);
            _.fill(groupValueArray, 5, 21, 25 + 1);
            _.fill(groupValueArray, 6, 26, 30 + 1);
            _.fill(groupValueArray, 7, 31, 40 + 1);
            _.fill(groupValueArray, 8, 41, 50 + 1);
            var nextGroupVal = 9;
            for (var i = 50; i <= 300; i = i + 10) {
                var inc = i + 1;
                _.fill(groupValueArray, nextGroupVal, inc, inc + 10);
                nextGroupVal++;
            }
        }
        if (value > groupValueArray.length - 1) {
            throw RangeError("Max v\u00E4rde \u00E4r " + (groupValueArray.length - 1));
        }
        return groupValueArray[value];
    }
    Converter.toGroupValue = toGroupValue;
})(Converter = exports.Converter || (exports.Converter = {}));
