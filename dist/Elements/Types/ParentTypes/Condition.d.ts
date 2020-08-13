import { ParentType } from './ParentType';
import { Loader } from "../../../Loader";
import { Operator } from "../Condition/Operators/Operator";
import { Type } from "../Type";
export declare class Condition extends ParentType {
    name: string;
    operator: Operator | null;
    constructor();
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): unknown;
    addValue(value: Type): any;
    createFromParser(parsedData: {
        operator: string;
    }, configLoader: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
}
