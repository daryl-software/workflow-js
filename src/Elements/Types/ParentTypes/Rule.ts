import ParentType from './ParentType';
import Loader from '../../../Loader';
import Condition from './Condition';
import {ScalarValue} from '../../../typing/ScalarValue';

export default class Rule extends ParentType {

    public static readonly STRING_SEPARATOR = ', ';

    protected name = 'rule';

    private return: any;

    public getJSONData(): { [p: string]: unknown } | null {
        return {
            type: this.getName(),
            return: this.return,
            value: this.values
        }
    }

    public getResult(vars: any, childrenValues: any): unknown {
        for (let childrenValue of childrenValues) {
            if (childrenValue === false) {
                return false;
            }
        }
        return true;
    }

    public run(vars: Map<string, ScalarValue>): any {
        return this.runThroughTree(vars);
    }

    public getReturn() {
        return this.return;
    }

    public setReturn(returnValue: any): void {
        this.return = returnValue;
    }

    createFromParser(parsedData: any, configLoader?: Loader): Rule {
        let instance = new Rule();
        instance.return = parsedData.return;
        return instance;
    }

    public toString() {
        return this.values
            .map((value) => {
                return '(' + value + '): ' + this.return;
            })
            .join(
                Rule.STRING_SEPARATOR
            )
        ;
    }

    public attachNewCondition(conditionOperatorType: string): Condition {
        const condition = Condition.create(this.getLoader());
        condition.setConditionOperator(conditionOperatorType);
        this.addValue(condition);
        return condition;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        return this.getValues().length !== 0;
    }
}
