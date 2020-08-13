import { ScalarType } from './ScalarType';
import { Loader } from "../../../Loader";
export declare class Scalar extends ScalarType {
    name: string;
    scalarValue: number | string | Array<any> | null;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): any;
    createFromParser(parsedData: {
        value: any;
    }, configLoader: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
}
