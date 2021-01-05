import ParentType from './ParentType';
import Type from '../Type';
import Loader from '../../../Loader';
import CompareOperator from '../../CompareOperators/CompareOperator';
export default class Comparator extends ParentType {
    name: string;
    comparator: CompareOperator | null;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
    getResult(vars: any, childrenValues: any): unknown;
    createFromParser(parsedData: {
        comparator: string;
    }, loader: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
    setComparator(comparator: CompareOperator): this;
    addValue(value: Type): any;
    removeValue(index: number): void;
    toString(): string;
    getValues(): Array<Type>;
}
