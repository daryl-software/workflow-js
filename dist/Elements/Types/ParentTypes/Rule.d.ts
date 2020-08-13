import { ParentType } from './ParentType';
import { Loader } from "../../../Loader";
export declare class Rule extends ParentType {
    static readonly STRING_SEPARATOR = ", ";
    name: string;
    private return;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): unknown;
    run(vars: Object): any;
    getReturn(): any;
    createFromParser(parsedData: any, configLoader?: Loader): Rule;
    isValid(vars: any, childrenValues: any): boolean;
}
