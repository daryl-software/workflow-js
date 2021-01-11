import ScalarType from './ScalarType';
import Loader from '../../../Loader';
import { ScalarValue } from '../../../typing/ScalarValue';
export default class Variable extends ScalarType {
    name: string;
    getResult(vars: Map<string, ScalarValue>, childrenValues: any): string | number | ScalarValue[] | undefined;
    createFromParser(parsedData: {
        value: any;
    }, loader: Loader): any;
    isValid(vars: Map<string, ScalarValue>, childrenValues: Array<any>): boolean;
    toString(): string;
}
