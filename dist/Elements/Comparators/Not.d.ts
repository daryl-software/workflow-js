import { Comparator } from './Comparator';
export declare class Not extends Comparator {
    name: string;
    getJSONData(): {
        [p: string]: unknown;
    };
    getResult(vars: any, childrenValues: any): boolean;
    isValid(vars: any, childrenValues: any): boolean;
}
