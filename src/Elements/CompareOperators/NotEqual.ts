import CompareOperator from './CompareOperator';

export default class NotEqual extends CompareOperator {

    public name = 'notEqual';

    getJSONData(): { [p: string]: unknown } | null {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        let valueToBeEquals = childrenValues[0];
        for (let childrenValue of childrenValues) {
            if (childrenValue != valueToBeEquals) {
                return true;
            }
        }
        return false;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length > 0;
    }

    public toString(): string {
        return 'NOT(' + this.getOperands()[0] + ')';
    }
}
