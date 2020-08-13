import {ParentType} from './ParentType';
import {Loader} from "../../../Loader";

export class Action extends ParentType {
    public name = 'internalFunction';
    public function: Action | null = null;

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): unknown {
        return this.function?.getResult(vars, childrenValues);
    }

    createFromParser(parsedData: { name: string }, configLoader?: Loader): any {
        let instance = new Action();
        instance.function = configLoader?.getActionProviderConfig().getClass(parsedData.name);
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        if (this.function === null) {
            return false;
        }
        return this.function.isValid(vars, childrenValues);
    }
}
