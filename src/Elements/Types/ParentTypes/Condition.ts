import {ParentType} from './ParentType';
import {Loader} from "../../../Loader";
import {Operator} from "../Condition/Operators/Operator";
import {Type} from "../Type";

export class Condition extends ParentType {

    public name: string = 'condition';
    public operator: Operator | null = null;

    constructor() {
        super();
    }

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.operator?.getResult(vars, childrenValues);
    }

    addValue(value: Type): any {
        this.operator?.addOperand(value);
        return this;
    }

    createFromParser(parsedData: { operator: string }, configLoader: Loader): any {
        let instance = new Condition();
        instance.operator = configLoader.getTypeProviderConfig().getClass(parsedData.operator);
        return instance;
    }

    public isValid(vars: any, childrenValues: any): boolean {
        if (this.operator === null) {
            return false;
        }
        return this.operator?.isValid(vars, childrenValues);
    }


}
