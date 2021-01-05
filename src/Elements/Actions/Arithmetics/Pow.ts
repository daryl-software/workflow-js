import ActionOperator from '../ActionOperator';

export default class Pow extends ActionOperator {

    public name = 'pow';

    getHash(): string {
        return '';
    }

    getResult(vars: any, childrenValues: any): number {
        return childrenValues[0] ** childrenValues[1];
    }

    public isValid(vars: any, childrenValues: Array<any>): boolean {
        if (childrenValues.length === 0) {
            return false;
        }

        for (let childrenValue of childrenValues) {
            if (isNaN(Number(childrenValue))) {
                return false;
            }
        }
        return true;
    }

    toString(): string {
        return this.args.join(' ** ');
    }
}
