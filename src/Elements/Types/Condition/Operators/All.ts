import Operator from './Operator';

export default class All extends Operator {

    public name = 'all';

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } | null {
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
        return this.operands.length === 2;
    }

    public toString() {
        return this.getOperands().join(' AND ');
    }
}
