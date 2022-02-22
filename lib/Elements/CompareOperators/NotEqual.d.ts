import CompareOperator from './CompareOperator';
export default class NotEqual extends CompareOperator {
    name: string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): boolean;
    isValid(vars: any, childrenValues: any): boolean;
    toString(): string;
}
