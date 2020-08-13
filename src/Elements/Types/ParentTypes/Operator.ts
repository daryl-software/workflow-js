import {ParentType} from './ParentType';
import {Loader} from "../../../Loader";


export class Operator extends ParentType {

    public name = 'operator';
    public operator: Operator | null = null;

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.operator?.getResult(vars, childrenValues);
    }

    createFromParser(parsedData: { operator: string }, configLoader: Loader): any {
        let instance = new Operator();
        instance.operator = configLoader.getOperatorProviderConfig().getClass(parsedData.operator);
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        if (this.operator === null) {
            return false;
        }
        return this.operator.isValid(vars, childrenValues);
    }
}
