import {Operator} from './Operator';

export class All extends Operator {

    public name = 'all';

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        for (let childrenValue of childrenValues) {
            if (childrenValue !== true) {
                return false;
            }
        }
        return true;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length !== 2;
    }
}
