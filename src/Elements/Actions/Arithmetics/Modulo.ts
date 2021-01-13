import ActionFunction from '../ActionFunction';

export default class Modulo extends ActionFunction {

    public name = 'modulo';

    getHash(): string {
        return '';
    }

    getResult(vars: any, childrenValues: any): unknown {
        let firstOperand = Number(this.args[0].getResult(vars, childrenValues));
        let secondOperand = Number(this.args[1].getResult(vars, childrenValues));

        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            throw 'Modulo argument must be numeric';
        }

        return firstOperand % secondOperand;
    }

    public isValid(vars: any, childrenValues: Array<any>): boolean {
        if (childrenValues.length !== 2) {
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
        return this.args.join(' % ');
    }
}
