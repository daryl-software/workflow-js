import { Operator } from './Operator';
export declare class Any extends Operator {
    name: string;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): boolean;
    isValid(vars: any, childrenValues: any): boolean;
}
