import {Comparator} from './Comparator';

export class GreaterOrEqual extends Comparator {

    public name = 'greater';

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        return childrenValues[0] >= childrenValues[1];
    }
    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length !== 2;
    }
}
