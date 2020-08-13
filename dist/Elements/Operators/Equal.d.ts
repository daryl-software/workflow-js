import { Operator } from './Operator';
export declare class Equal extends Operator {
    name: string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: Array<unknown>): unknown;
}
