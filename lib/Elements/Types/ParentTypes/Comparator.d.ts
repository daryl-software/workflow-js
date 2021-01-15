import ParentType from './ParentType';
import Type from '../Type';
import Loader from '../../../Loader';
import CompareOperator from '../../CompareOperators/CompareOperator';
import { ScalarValue } from '../../../typing/ScalarValue';
import Action from './Action';
import { Scalar, Variable } from '../ScalarTypes';
export default class Comparator extends ParentType {
    name: string;
    compareOperator: CompareOperator | null;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): unknown;
    createFromParser(parsedData: {
        comparator: string;
    }, loader: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
    addValue(value: Type): any;
    removeValue(index: number): void;
    toString(): string;
    getValues(): Array<Type>;
    setCompareOperator(compareOperatorType: string, emptyValue?: boolean): this;
    getCompareOperator(): CompareOperator | null;
    attachNewAction(actionFunctionType: string): Action;
    attachNewScalar(scalarValue: ScalarValue): Scalar;
    attachNewVariable(variableName: string): Variable;
}
