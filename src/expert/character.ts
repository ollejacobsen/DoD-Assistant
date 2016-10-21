export namespace Character {
    export function skillCost(currentValue: number, wantedValue: number, cost: number, type = "A"): number{
        if(wantedValue <= currentValue) {
            throw RangeError("Du kan inte köpa ner dig"); 
        } 

        let values: Array<number> = [];

        if(type.toLowerCase() == "a") {
            for(let i = currentValue+1; i <= wantedValue; i++) {
                let multiple = getMultipleForASkillsAndSpells(i);
                values.push(multiple * cost);
            }
        }
        else if(type.toLowerCase() == "b"){
            if(wantedValue > 5 || currentValue > 5) {  throw RangeError("Du kan aldrig ha högre än 5 i en typ B-färdighet"); }

            for(let i = currentValue+1; i <= wantedValue; i++) {
                let multiple = getMultipleForBSkills(i);
                values.push(multiple * cost);
            }
        }
        else{
            throw TypeError("Det finns bara A- och B-färdigheter i min värld. Besvärjelser räknas som A-färdighet");
        }
        
            
        let sum = 0;
        for (var i=values.length; i--;) {
            sum+=values[i];
        }

        return sum;
    }

    export function getMultipleForASkillsAndSpells(value: number): number {
        let multiple = 1;
        if(value > 20) {
            let interationStart = 21;
            multiple = 5;
            while(interationStart <= value) {
                if(interationStart > 21 && interationStart % 3 == 0) {
                    multiple++;
                }
                interationStart++;
            }
        } 
        else if(value > 17)
            multiple = 4;
        else if(value > 14)
            multiple = 3;
        else if(value > 10)
            multiple = 2;
        
        return multiple;
    }

    export function getMultipleForBSkills(value: number): number {
        if(value > 4)
            return 3;
        else if(value > 2)
            return 2;
        else
            return 1;
    }
}