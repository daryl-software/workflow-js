import {ParentType} from './ParentType';
import {Loader} from "../../../Loader";

export class Rule extends ParentType {

    public static readonly STRING_SEPARATOR = ', ';

    public name = 'rule';

    private return: any;

    getHash(): string {
        return '';
    }

    getJSONData(): { [p: string]: unknown } {
        return {};
    }

    getResult(vars: any, childrenValues: any): unknown {
        for (let childrenValue of childrenValues) {
            if (childrenValue === false) {
                return false;
            }
        }
        return true;
    }

    run(vars: Object): any {
        return this.runThroughTree(vars);
    }

    getReturn() {
        return this.return;
    }

    createFromParser(parsedData: any, configLoader?: Loader): Rule {
        let instance = new Rule();
        instance.return = parsedData.return;
        return instance;
    }

    isValid(vars: any, childrenValues: any): boolean {
        return this.getValues().length !== 0;
    }
}
