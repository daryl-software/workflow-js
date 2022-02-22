import CompareOperator from './CompareOperator';

export default class NotIn extends CompareOperator {

    public name = 'notIn';

    getJSONData(): { [p: string]: unknown } | null {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        let valueToBeEquals = childrenValues[0];
        for (let [key, childrenValue] of childrenValues.entries()) {
            if (key === 0) {
                continue
            }
            if (childrenValue == valueToBeEquals) {
                return false;
            }
        }
        return true;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length > 1;
    }

    public toString(): string {
        return 'NOTIN(' + this.getOperands()[0] + ')';
    }
}
