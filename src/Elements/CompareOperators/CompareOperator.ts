import Element from '../Element';
import Type from '../Types/Type';
import Scalar from '../Types/ScalarTypes/Scalar';
import Variable from '../Types/ScalarTypes/Variable';

export default abstract class CompareOperator extends Element {

    protected operands: Array<Type> = [];

    public getHash(): string {
        return '';
    }

    public getJSONData(): { [p: string]: unknown } | null {
        return null;
    }

    getOperands() {
        return this.operands;
    }

    addOperand(type: Type): this {
        this.operands.push(type);
        return this;
    }

    public attachNewScalar(value: number | string | Array<any>) {
        const operand = Scalar.create(this.getLoader());
        operand.setValue(value);
        this.addOperand(operand);
        return operand;
    }

    public attachNewVariable(name: string): Variable {
        const operand = Variable.create(this.getLoader());
        operand.setValue(name);
        this.addOperand(operand);
        return operand;
    }

    public removeOperand(index: number) {
        this.operands.splice(index, 1);
    }
}
