export namespace Converter {
    export function basicT100ValueToT20(t100: number) {
        return Math.round(t100/5);
    }

    export function toGroupValue(value: number) {
        
        var g = new Array(20);
        // g = g.fill(0, 0, 4);
    }
}