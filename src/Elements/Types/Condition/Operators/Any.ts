import {Operator} from './Operator';

export class Any extends Operator {

    public name = 'any';

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        for (let childrenValue of childrenValues) {
            if (childrenValue === true) {
                return true;
            }
        }
        return false;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length !== 2;
    }
}
