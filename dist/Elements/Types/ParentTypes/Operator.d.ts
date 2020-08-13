import { ParentType } from './ParentType';
import { Loader } from "../../../Loader";
export declare class Operator extends ParentType {
    name: string;
    operator: Operator | null;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): unknown;
    createFromParser(parsedData: {
        operator: string;
    }, configLoader: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
}
