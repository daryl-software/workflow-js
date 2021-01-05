import ActionOperator from '../ActionOperator';
export default class Modulo extends ActionOperator {
    name: string;
    getHash(): string;
    getResult(vars: any, childrenValues: any): unknown;
    isValid(vars: any, childrenValues: Array<any>): boolean;
    toString(): string;
}
