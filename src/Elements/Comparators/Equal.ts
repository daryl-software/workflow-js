import {Comparator} from './Comparator';

export class Equal extends Comparator {

    public name = 'equal';

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        let valueToBeEquals = childrenValues[0];

        for (let childrenValue of childrenValues) {
            if (childrenValue != valueToBeEquals) {
                return false;
            }
        }
        return true
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length !== 0;
    }


}
