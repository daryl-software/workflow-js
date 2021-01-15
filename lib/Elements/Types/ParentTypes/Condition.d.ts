import ParentType from './ParentType';
import Loader from '../../../Loader';
import Operator from '../Condition/Operators/Operator';
import Type from '../Type';
import Comparator from './Comparator';
export default class Condition extends ParentType {
    name: string;
    conditionOperator: Operator | null;
    constructor();
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): unknown;
    addValue(value: Type): any;
    removeValue(index: number): void;
    createFromParser(parsedData: {
        condition: string;
    }, loader: Loader): Condition;
    isValid(vars: any, childrenValues: any): boolean;
    toString(): string;
    getValues(): Array<Type>;
    attachNewComparator(comparatorType: string): Comparator;
    attachNewCondition(conditionType: string): Condition;
    setConditionOperator(conditionOperatorName: string, emptyValue?: boolean): this;
    getConditionOperator(): Operator | null;
}
