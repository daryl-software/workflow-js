import {Comparator} from './Comparator';

export class Not extends Comparator {

    public name = 'lessOrEqual';

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        return !childrenValues[0];
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length !== 2;
    }
}
