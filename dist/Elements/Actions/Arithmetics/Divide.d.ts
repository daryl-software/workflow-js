import { Action } from '../Action';
export declare class Divide extends Action {
    name: string;
    getHash(): string;
    getResult(vars: any, childrenValues: any): number;
    isValid(vars: any, childrenValues: Array<any>): boolean;
}
