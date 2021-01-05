import ScalarType from './ScalarType';
import Loader from '../../../Loader';
export default class Scalar extends ScalarType {
    name: string;
    getResult(vars: any, childrenValues: any): any;
    createFromParser(parsedData: {
        value: any;
    }, loader: Loader): any;
    isValid(vars: any, childrenValues: any): boolean;
    toString(): string;
}
