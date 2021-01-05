import ActionFunction from '../ActionFunction';
export default class Times extends ActionFunction {
    name: string;
    getHash(): string;
    getResult(vars: any, childrenValues: any): number;
    isValid(vars: any, childrenValues: Array<any>): boolean;
    toString(): string;
}
