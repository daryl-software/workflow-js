import { ParentType } from './ParentType';
export declare class InternalFunction extends ParentType {
    name: string;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: Array<unknown>): unknown;
}
