import { Type } from '../../Type';
export declare abstract class Operator extends Type {
    protected operands: Array<any>;
    addOperand(value: Type): this;
    getOperands(): any[];
}
