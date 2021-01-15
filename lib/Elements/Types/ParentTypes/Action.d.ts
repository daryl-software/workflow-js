import ParentType from './ParentType';
import Loader from '../../../Loader';
import ActionElement from '../../Actions/ActionFunction';
import Type from '../Type';
import { ScalarValue } from '../../../typing/ScalarValue';
import { Scalar, Variable } from '../ScalarTypes';
export default class Action extends ParentType {
    name: string;
    actionFunction: ActionElement | null;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): unknown;
    createFromParser(parsedData: {
        function: string;
    }, loader: Loader): Action;
    isValid(vars: any, childrenValues: any): boolean;
    toString(): string;
    getValues(): Array<Type>;
    setActionFunction(actionFunctionType: string, emptyValue?: boolean): Action;
    getActionFunction(): ActionElement | null;
    attachNewAction(actionFunctionType: string): Action;
    attachNewScalar(scalarValue: ScalarValue): Scalar;
    attachNewVariable(variableName: string): Variable;
    addValue(value: Type): any;
    removeValue(index: number): void;
}
