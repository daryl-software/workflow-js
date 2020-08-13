import { ParentType } from './ParentType';
import { Loader } from "../../../Loader";
export declare class Action extends ParentType {
    name: string;
    function: Action | null;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): unknown;
    createFromParser(parsedData: {
        name: string;
    }, configLoader?: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
}
