import { Action } from '../Action';
export declare class Modulo extends Action {
    name: string;
    getHash(): string;
    getResult(vars: any, childrenValues: any): unknown;
    isValid(vars: any, childrenValues: Array<any>): boolean;
}
