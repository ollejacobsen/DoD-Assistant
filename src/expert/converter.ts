import * as _ from 'lodash';

export namespace Converter {
    export function basicT100ValueToT20(t100: number) {
        return Math.round(t100/5);
    }

    let groupValueArray = Array<number>();
    export function toGroupValue(value: number) {
        if(groupValueArray.length == 0) {
            groupValueArray = Array<number>(301);
            _.fill(groupValueArray, 0, 0, 3+1);
            _.fill(groupValueArray, 1, 4, 8+1);
            _.fill(groupValueArray, 2, 9, 12+1);
            _.fill(groupValueArray, 3, 13, 16+1);
            _.fill(groupValueArray, 4, 17, 20+1);
            _.fill(groupValueArray, 5, 21, 25+1);
            _.fill(groupValueArray, 6, 26, 30+1);
            _.fill(groupValueArray, 7, 31, 40+1);
            _.fill(groupValueArray, 8, 41, 50+1);
            let nextGroupVal = 9;
            for(let i = 50; i<=300; i = i+10){
                var inc = i+1;
                _.fill(groupValueArray, nextGroupVal, inc, inc+10);
                nextGroupVal++;
            }
        }

         if(value > groupValueArray.length-1){
             throw RangeError(`Max värde är ${groupValueArray.length-1}`);
         }

        return groupValueArray[value];
    }
}