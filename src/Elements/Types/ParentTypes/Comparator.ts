import ParentType from './ParentType';
import Type from '../Type';
import Loader from '../../../Loader';
import CompareOperator from '../../CompareOperators/CompareOperator';
import {ScalarValue} from '../../../typing/ScalarValue';
import Action from './Action';
import {Scalar, Variable} from '../ScalarTypes';

export default class Comparator extends ParentType {

    public name = 'comparator';
    public compareOperator: CompareOperator | null = null;

    getHash(): string {
        if (this.compareOperator) {
            return this.hashValues(this.compareOperator?.getOperands(), this.compareOperator?.getName());
        } else {
            return '';
        }
    }

    getJSONData(): { [p: string]: unknown } | null {
        return {
            type: this.name,
            comparator: this.compareOperator?.getName(),
            value: this.compareOperator?.getOperands()
        };
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.compareOperator?.getResult(vars, childrenValues);
    }

    createFromParser(parsedData: { comparator: string }, loader: Loader): any {
        let instance = Comparator.create(loader);
        instance.compareOperator = loader.getComparatorProviderConfig().createInstance(parsedData.comparator);
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        if (this.compareOperator === null) {
            return false;
        }
        return this.compareOperator.isValid(vars, childrenValues);
    }

    public addValue(value: Type): any {
        if (!this.compareOperator) {
            throw `Can't add operand without any comparator`;
        }

        this.compareOperator.addOperand(value);
        return this;
    }

    public removeValue(index: number) {
        if (!this.compareOperator) {
            throw `Can't remove operand without any comparator`;
        }

        this.compareOperator.removeOperand(index);
    }

    toString(): string {
        if (!this.compareOperator) {
            return '';
        }
        return this.compareOperator.toString();
    }

    public getValues(): Array<Type> {
        if (!this.compareOperator) {
            return [];
        }
        return this.compareOperator.getOperands();
    }

    public setCompareOperator(compareOperatorType: string) {
        this.compareOperator = this.getLoader().getComparatorProviderConfig().createInstance(compareOperatorType);
        return this;
    }

    public getCompareOperator() {
        return this.compareOperator;
    }

    public attachNewAction(actionFunctionType: string) {
        if (!this.compareOperator) {
            throw 'A compare operator must be set before adding childs';
        }

        const action = Action.create(this.getLoader());
        action.setActionFunction(actionFunctionType);
        this.compareOperator.addOperand(action);
        return action;
    }

    public attachNewScalar(scalarValue: ScalarValue): Scalar {
        if (!this.compareOperator) {
            throw 'A compare operator must be set before adding childs';
        }

        const scalar = Scalar.create(this.getLoader());
        scalar.setValue(scalarValue);
        this.compareOperator.addOperand(scalar);
        return scalar;
    }

    public attachNewVariable(variableName: string) {
        if (!this.compareOperator) {
            throw 'A compare operator must be set before adding childs';
        }

        const variable = Variable.create(this.getLoader());
        variable.setValue(variableName);
        this.compareOperator.addOperand(variable);
        return variable;
    }
}
