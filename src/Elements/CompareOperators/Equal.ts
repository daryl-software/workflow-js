import CompareOperator from './CompareOperator';

export default class Equal extends CompareOperator {

    public name = 'equal';

    getJSONData(): { [p: string]: unknown } | null {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        let valueToBeEquals = childrenValues[0];
        for (let childrenValue of childrenValues) {
            if (childrenValue != valueToBeEquals) {
                return false;
            }
        }
        return true;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length !== 0;
    }

    toString(): string {
        return '(' + this.getOperands().join(' = ') + ')';
    }
}
