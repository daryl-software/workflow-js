import Type from '../../Type';

export default abstract class Operator extends Type {
    protected operands: Array<Type> = [];

    public addOperand(value: Type) {
        this.operands.push(value);
        return this;
    }

    public getOperands() {
        return this.operands;
    }

    public removeOperand(index: number) {
        this.operands.splice(index, 1);
    }
}
