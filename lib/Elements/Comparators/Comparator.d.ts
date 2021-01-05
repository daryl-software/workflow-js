import Element from '../Element';
import Type from '../Types/Type';
import Scalar from '../Types/ScalarTypes/Scalar';
import Variable from '../Types/ScalarTypes/Variable';
export default abstract class Comparator extends Element {
    protected operands: Array<Type>;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getOperands(): Type[];
    addOperand(type: Type): this;
    attachNewScalar(value: number | string | Array<any>): Scalar;
    attachNewVariable(name: string): Variable;
}
