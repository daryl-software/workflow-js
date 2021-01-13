import CompareOperator from './CompareOperator';

export default class Not extends CompareOperator {

    public name = 'not';

    getJSONData(): { [p: string]: unknown } | null {
        return {};
    }

    getResult(vars: any, childrenValues: any): boolean {
        return !childrenValues[0];
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.operands.length === 1;
    }

    public toString(): string {
        return 'NOT(' + this.getOperands()[0] + ')';
    }
}
