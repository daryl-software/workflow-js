import ParentType from './ParentType';
import Loader from '../../../Loader';
import ActionElement from '../../Actions/ActionFunction';
import Type from '../Type';
import {ScalarValue} from '../../../typing/ScalarValue';
import {Scalar, Variable} from '../ScalarTypes';

export default class Action extends ParentType {
    public name = 'action';
    public actionFunction: ActionElement | null = null;

    getJSONData(): { [p: string]: unknown } | null {
        return {
            type: this.name,
            function: this.actionFunction?.getName(),
            value: this.actionFunction?.getArgs()
        };
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.actionFunction?.getResult(vars, childrenValues);
    }

    createFromParser(parsedData: { function: string }, loader: Loader): Action {
        let instance = Action.create(loader);
        instance.actionFunction = loader.getActionProviderConfig().createInstance(parsedData.function);
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        if (this.actionFunction === null) {
            return false;
        }
        return this.actionFunction.isValid(vars, childrenValues);
    }

    public toString(): string {
        if (!this.actionFunction) {
            return '';
        }
        return '(' + this.actionFunction.toString() + ')';
    }

    public getValues(): Array<Type> {
        return this.actionFunction?.getArgs() || [];
    }

    public setActionFunction(actionFunctionType: string): Action {
        this.actionFunction = this.getLoader().getActionProviderConfig().createInstance(actionFunctionType);
        return this;
    }

    public getActionFunction() {
        return this.actionFunction;
    }

    public attachNewAction(actionFunctionType: string): Action {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }

        const action = Action.create(this.getLoader());
        action.setActionFunction(actionFunctionType);
        this.actionFunction.addArgs(action);
        return action;
    }

    public attachNewScalar(scalarValue: ScalarValue): Scalar {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }

        const scalar = Scalar.create(this.getLoader());
        scalar.setValue(scalarValue);
        this.actionFunction.addArgs(scalar);
        return scalar;
    }

    public attachNewVariable(variableName: string): Variable {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }

        const variable = Variable.create(this.getLoader());
        variable.setValue(variableName);
        this.actionFunction.addArgs(variable);
        return variable;
    }

    public addValue(value: Type): any {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }

        this.actionFunction?.addArgs(value);
        return this;
    }

    public removeValue(index: number) {
        if (!this.actionFunction) {
            throw `Can't remove args without any function`;
        }

        this.actionFunction.removeArgs(index);
    }
}
