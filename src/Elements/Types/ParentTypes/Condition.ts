import ParentType from './ParentType';
import Loader from '../../../Loader';
import Operator from '../Condition/Operators/Operator';
import Type from '../Type';
import Comparator from './Comparator';

export default class Condition extends ParentType {

    public name: string = 'condition';
    public conditionOperator: Operator | null = null;

    constructor() {
        super();
    }

    getJSONData(): { [p: string]: unknown } | null {
        return {
            type: this.name,
            condition: this.conditionOperator?.getName(),
            value: this.conditionOperator?.getOperands()
        };
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.conditionOperator?.getResult(vars, childrenValues);
    }

    public addValue(value: Type): any {
        if (!this.conditionOperator) {
            throw `Cannot add value without any condition operator`;
        }
        this.conditionOperator.addOperand(value);
        return this;
    }

    public removeValue(index: number) {
        if (!this.conditionOperator) {
            throw `Cannot remove value without any condition operator`;
        }
        this.conditionOperator.removeOperand(index);
    }

    createFromParser(parsedData: { condition: string }, loader: Loader): Condition {
        let typeElement = loader.getTypeProviderConfig().createInstance(parsedData.condition);
        if (typeElement instanceof Operator) {
            let instance = Condition.create(loader);
            instance.conditionOperator =  typeElement;
            return instance;
        }
        throw `Given object is not valid`;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        if (this.conditionOperator === null) {
            return false;
        }

        return this.conditionOperator.isValid(vars, childrenValues);
    }

    public toString(): string {
        if (!this.conditionOperator) {
            return '';
        }
        return this.conditionOperator.toString();
    }

    public getValues(): Array<Type> {
        if (!this.conditionOperator) {
            return [];
        }
        return this.conditionOperator.getOperands();
    }

    public attachNewComparator(comparatorType: string): Comparator {
        if (!this.conditionOperator) {
            throw 'A condition operator must be set before adding childs';
        }

        const comparator = Comparator.create(this.getLoader());
        comparator.setCompareOperator(comparatorType);
        this.conditionOperator.addOperand(comparator);
        return comparator;
    }

    public attachNewCondition(conditionType: string): Condition {
        if (!this.conditionOperator) {
            throw 'A condition operator must be set before adding childs';
        }

        const condition = Condition.create(this.getLoader());
        condition.setConditionOperator(conditionType);
        this.conditionOperator.addOperand(condition);
        return condition;
    }

    public setConditionOperator(conditionOperatorName: string, emptyValue: boolean = false): this {
        const conditionOperator = this.getLoader().getTypeProviderConfig().createInstance(conditionOperatorName);
        if (!(conditionOperator instanceof Operator)) {
            throw `Given name must be an condition operator`;
        }

        if (!emptyValue) {
            const values = this.getValues();
            if (values.length > 0) {
                values.forEach((value) => {
                    conditionOperator.addOperand(value);
                });
            }
        }

        this.conditionOperator = conditionOperator;
        return this;
    }

    public getConditionOperator(): Operator | null {
        return this.conditionOperator;
    }
}
