import CompareOperator from './CompareOperator';

export default class In extends CompareOperator {

    public name = 'in';

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
                return true;
            }
        }
        return false;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length > 1;
    }

    toString(): string {
        return 'IN(' + this.getOperands().join(' = ') + ')';
    }
}
