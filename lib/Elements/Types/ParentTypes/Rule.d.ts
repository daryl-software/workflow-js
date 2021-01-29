import ParentType from './ParentType';
import Loader from '../../../Loader';
import Condition from './Condition';
import { ScalarValue } from '../../../typing/ScalarValue';
export default class Rule extends ParentType {
    static readonly STRING_SEPARATOR = ", ";
    protected name: string;
    private return;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): unknown;
    run(vars: Map<string, ScalarValue>): any;
    isRuleValid(vars: Map<string, ScalarValue>): any;
    getReturn(): any;
    setReturn(returnValue: any): void;
    createFromParser(parsedData: any, configLoader?: Loader): Rule;
    toString(): string;
    attachNewCondition(conditionOperatorType: string): Condition;
    isValid(vars: any, childrenValues: any): boolean;
}
