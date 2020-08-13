import { Comparator } from './Comparator';
export declare class Greater extends Comparator {
    name: string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): boolean;
    isValid(vars: any, childrenValues: any): boolean;
}
