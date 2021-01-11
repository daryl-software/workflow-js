import Type from '../../Type';
export default abstract class Operator extends Type {
    protected operands: Array<Type>;
    addOperand(value: Type): this;
    getOperands(): Type[];
    removeOperand(index: number): void;
}
