import {Type} from '../../Type';

export abstract class Operator extends Type {
    protected operands: Array<any> = [];

    public addOperand(value: Type) {
        this.operands.push(value);
        return this;
    }

    public getOperands() {
        return this.operands;
    }
}
