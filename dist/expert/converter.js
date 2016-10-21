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
